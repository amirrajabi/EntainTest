import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

import {Race} from '../models/Race';
import nedsApi from '../api/nedsApi';
import {RootState} from '../store/store';

import RaceItem from './RaceItem';

const RaceList = () => {
  const [races, setRaces] = useState<Race[]>([]);
  const {id} = useSelector((state: RootState) => state.appSlice);

  useEffect(() => {
    let intervalId: any;
    const fetchAndFilterRaces = async () => {
      try {
        let fetchedRaces = await nedsApi.fetchRaces();
        if (id) {
          fetchedRaces = fetchedRaces.filter(race => race.category_id === id);
        }

        const processedRaces = fetchedRaces
          .sort(
            (a, b) =>
              new Date(a.advertised_start.seconds * 1000).getTime() -
              new Date(b.advertised_start.seconds * 1000).getTime(),
          )
          .filter(race => {
            const startTime = new Date(race.advertised_start.seconds * 1000);
            const oneMinuteAfterStart = new Date(startTime.getTime() + 60000);
            return oneMinuteAfterStart > new Date();
          })
          .slice(0, 5);

        setRaces(processedRaces);
      } catch (error) {
        console.error('Error fetching races:', error);
      }
    };

    fetchAndFilterRaces();
    intervalId = setInterval(fetchAndFilterRaces, 60000);
    return () => clearInterval(intervalId);
  }, [id]);

  return (
    <View>
      <FlatList
        data={races}
        style={styles.listContainer}
        renderItem={({item}) => <RaceItem race={item} />}
        keyExtractor={item => `${item.meeting_id}`}
      />
    </View>
  );
};

export default RaceList;

const styles = StyleSheet.create({
  listContainer: {
    height: 'auto',
  },
});
