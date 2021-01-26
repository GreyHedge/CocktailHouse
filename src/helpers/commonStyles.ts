import {StyleSheet} from 'react-native';

export const commonStyles = StyleSheet.create({
  shadowLeft: {
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  shadowRight: {
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  noOverflow: {
    overflow: 'hidden',
  },
});
