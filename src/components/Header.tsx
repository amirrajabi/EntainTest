import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from '../store/store';

import NedsLogo from '../assets/NedsLogo';
import {findLabelById} from '../constants/categories';

type HeaderProps = {
  title: string;
};

export default function Header({title}: HeaderProps) {
  const {id} = useSelector((state: RootState) => state.appSlice);
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionBody}>
        <NedsLogo />
        <Text style={styles.bodyTitle}>{title}</Text>
      </View>
      <Text style={styles.categoryTitle}>{findLabelById(id)} Races</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 16,
    height: 148,
    justifyContent: 'flex-end',
    backgroundColor: '#ff7800',
  },
  sectionBody: {justifyContent: 'flex-end', marginBottom: 16},
  bodyTitle: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
  categoryTitle: {
    color: '#FFFFFF',
    fontWeight: '400',
  },
});
