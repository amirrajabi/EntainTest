import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {selectedCategory} from '../store/appSlice';
import {categories} from '../constants/categories';
import {RootState} from '../store/store';

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const {id} = useSelector((state: RootState) => state.appSlice);

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        {categories.map(category => (
          <TouchableOpacity
            key={category.id}
            style={styles.category}
            onPress={() => dispatch(selectedCategory(category.id))}>
            <Text
              style={
                category.id !== id ? styles.buttons : styles.selectedButton
              }>
              {category.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginVertical: 16,
  },
  category: {},
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttons: {
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    overflow: 'hidden',
    borderColor: '#ccc',
    backgroundColor: '#FFFFFF',
  },
  selectedButton: {
    borderColor: '#ff7800',
    backgroundColor: '#ff7800',
    color: '#FFFFFF',
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    overflow: 'hidden',
  },
});

export default CategoryFilter;
