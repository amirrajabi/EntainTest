import {StyleSheet} from 'react-native';

import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonBase: {
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    overflow: 'hidden',
    paddingHorizontal: 10,
  },
  button: {
    color: colors.dark,
    borderColor: colors.lightGray,
    backgroundColor: colors.light,
  },
  selectedButton: {
    fontWeight: '700',
    color: colors.light,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },
});

export default styles;
