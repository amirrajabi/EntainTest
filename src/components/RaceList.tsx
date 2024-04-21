import {FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';

import {Race} from '../models/Race';
import nedsApi from '../api/nedsApi';

import RaceItem from './RaceItem';
import CategoryFilter from './CategoryFilter';

const RaceList = () => {
  const [races, setRaces] = useState<Race[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  );

  useEffect(() => {
    let intervalId: any;
    const fetchAndFilterRaces = async () => {
      try {
        let fetchedRaces = await nedsApi.fetchRaces();
        if (selectedCategoryId) {
          fetchedRaces = fetchedRaces.filter(
            race => race.category_id === selectedCategoryId,
          );
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
  }, [selectedCategoryId]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <>
      <CategoryFilter onCategoryChange={handleCategoryChange} />

      <FlatList
        data={races}
        renderItem={({item}) => <RaceItem race={item} />}
        keyExtractor={item => `${item.meeting_id}`}
      />
    </>
  );
};

export default RaceList;
