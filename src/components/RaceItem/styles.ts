import {StyleSheet} from 'react-native';

import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  itemContainer: {
    height: 64,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    borderColor: colors.lightGray,
    justifyContent: 'space-between',
  },
  countryText: {
    fontSize: 12,
    color: colors.gray,
  },
  countdownText: {
    color: colors.dark,
  },
  warningColor: {
    color: colors.primary,
  },
});

export default styles;
