import React from 'react';
import {View, StatusBar} from 'react-native';

import styles from './styles';
import Header from '../../components/Header';
import RaceList from '../../components/RaceList';
import CategoryFilter from '../../components/CategoryFilter';

const Home = () => {
  return (
    <View style={styles.appContainer}>
      <StatusBar />
      <Header />
      <CategoryFilter />
      <RaceList />
    </View>
  );
};

export default Home;
