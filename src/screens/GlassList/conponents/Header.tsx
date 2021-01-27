import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Box} from '@components';
import {Colors, ESpacings} from '@constants';

const iconSize = ESpacings.s24;

export const Header: React.FC = () => {
  return (
    <Box
      row
      justifyContent="space-around"
      marginVertical={ESpacings.s16}
      style={styles.container}>
      <Icon
        name="glass-cocktail"
        color={Colors.pink}
        size={iconSize}
      />
      <Icon
        name="glass-flute"
        color={Colors.pink}
        size={iconSize}
      />
      <Icon
        name="glass-pint-outline"
        color={Colors.pink}
        size={iconSize}
      />
      <Icon
        name="glass-tulip"
        color={Colors.pink}
        size={iconSize}
      />
      <Icon
        name="glass-wine"
        color={Colors.pink}
        size={iconSize}
      />
      <Icon
        name="glass-stange"
        color={Colors.pink}
        size={iconSize}
      />
    </Box>
  )
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: Colors.reddish,
    borderBottomWidth: 1,
  }
});
