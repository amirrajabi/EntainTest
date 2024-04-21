import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Header from '../components/Header';
import RaceList from '../components/RaceList';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Header title="Next to go" />
      <RaceList />
    </SafeAreaView>
  );
}
