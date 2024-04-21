import React from 'react';
import {View, Text} from 'react-native';

import {Race} from '../models/Race';
import useCountdown from '../utils/countdownHelpers';

const RaceItem = ({race}: {race: Race}) => {
  const targetDate = new Date(race.advertised_start.seconds * 1000);
  const remainingTime = useCountdown(targetDate, () => console.log('Finished'));

  return (
    <View>
      <View>
        <Text>{race.meeting_name}</Text>
        <Text>Race {race.race_number}</Text>
        <Text>Race {race.category_id}</Text>
      </View>
      <Text>{remainingTime}</Text>
    </View>
  );
};

export default RaceItem;
