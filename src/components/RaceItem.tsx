import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Race} from '../models/Race';
import useCountdown from '../utils/countdownHelpers';

export default function RaceItem({race}: {race: Race}) {
  const targetDate = new Date(race.advertised_start.seconds * 1000);
  const remainingTime = useCountdown(targetDate, () => console.log('Finished'));

  const timeParts = remainingTime.split(' ');
  const lessThanFiveMinutes =
    timeParts[0] === '4m' || (timeParts[0] && parseInt(timeParts[0]) < 5);
  const secondsOnly = timeParts.length === 1;

  return (
    <View style={styles.itemContainer}>
      <View>
        <Text>
          {race.meeting_name} R{race.race_number}
        </Text>
        <Text style={styles.countryText}>{race.venue_country}</Text>
      </View>
      <Text
        style={[
          styles.countdownText,
          (lessThanFiveMinutes || secondsOnly) && styles.warningColor,
        ]}>
        {remainingTime}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  countryText: {
    fontSize: 12,
    color: '#999999',
  },
  countdownText: {
    color: '#202020',
  },
  warningColor: {
    color: '#ff7800',
  },
});
