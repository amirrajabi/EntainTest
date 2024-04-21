import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text} from 'react-native';

import styles from './styles';
import {RootState} from '../../store/store';
import NedsLogo from '../../assets/NedsLogo';
import {findLabelById} from '../../constants/categories';

const Header = () => {
  const title = useSelector((state: RootState) => state.appSlice.title);
  const selectedCategoryId = useSelector(
    (state: RootState) => state.appSlice.id,
  );
  const categoryLabel = findLabelById(selectedCategoryId);

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionBody}>
        <NedsLogo />
        <Text style={styles.bodyTitle}>{title}</Text>
      </View>
      <Text style={styles.categoryTitle}>{categoryLabel} Races</Text>
    </View>
  );
};

export default Header;
