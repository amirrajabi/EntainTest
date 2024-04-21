import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

import {store} from '../store/store';
import Header from '../components/Header';
import RaceList from '../components/RaceList';
import CategoryFilter from '../components/CategoryFilter';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.appContainer}>
        <StatusBar />
        <Header title="Next to Go" />
        <CategoryFilter />
        <RaceList />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
