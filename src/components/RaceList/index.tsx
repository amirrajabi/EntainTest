import React from 'react';
import {FlatList, View} from 'react-native';

import RaceItem from '../RaceItem';
import useRaceData from '../../hooks/useRaceData';

const RaceList = () => {
  const races = useRaceData();

  return (
    <View>
      <FlatList
        data={races}
        renderItem={({item}) => <RaceItem race={item} />}
        keyExtractor={item => `${item.meeting_id}`}
      />
    </View>
  );
};

export default RaceList;
