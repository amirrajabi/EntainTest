import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import {Race} from '../../models/Race';
import useCountdown from '../../utils/countdownHelpers';

const RaceItem = ({race}: {race: Race}) => {
  const targetDate = new Date(race.advertised_start.seconds * 1000);
  const remainingTime = useCountdown(targetDate, () => console.log('Finished'));

  const isWarningTime = () => {
    const timeParts = remainingTime.split(' ');
    return (
      timeParts[0] === '4m' ||
      (timeParts[0] && parseInt(timeParts[0], 10) < 5) ||
      timeParts.length === 1
    );
  };

  return (
    <View style={styles.itemContainer}>
      <View>
        <Text>
          {race.meeting_name} R{race.race_number}
        </Text>
        <Text style={styles.countryText}>{race.venue_country}</Text>
      </View>
      <Text
        style={[styles.countdownText, isWarningTime() && styles.warningColor]}>
        {remainingTime}
      </Text>
    </View>
  );
};

export default RaceItem;
