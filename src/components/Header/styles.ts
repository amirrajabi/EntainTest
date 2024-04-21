import {StyleSheet} from 'react-native';

import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 16,
    height: 148,
    justifyContent: 'flex-end',
    backgroundColor: colors.primary,
  },
  sectionBody: {justifyContent: 'flex-end', marginBottom: 16},
  bodyTitle: {
    fontWeight: '800',
    color: colors.light,
  },
  categoryTitle: {
    fontWeight: '600',
    color: colors.light,
  },
});

export default styles;
