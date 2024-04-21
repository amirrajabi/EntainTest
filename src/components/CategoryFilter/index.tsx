import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';
import {RootState} from '../../store/store';
import {selectedCategory} from '../../store/appSlice';
import {categories} from '../../constants/categories';

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const {id} = useSelector((state: RootState) => state.appSlice);

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        {categories.map(category => (
          <TouchableOpacity
            key={category.id}
            style={styles.buttonGroup}
            onPress={() => dispatch(selectedCategory(category.id))}>
            <Text
              style={
                category.id !== id
                  ? [styles.button, styles.buttonBase]
                  : [styles.selectedButton, styles.buttonBase]
              }>
              {category.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CategoryFilter;
