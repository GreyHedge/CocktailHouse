import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, EIconType, Icon} from '@components';
import {Colors, ESpacings} from '@constants';

const icons = ['glass-cocktail', 'glass-flute', 'glass-pint-outline', 'glass-tulip', 'glass-wine', 'glass-stange'];
const iconSize = ESpacings.s24;

export const Header: React.FC = React.memo(() => {
  return (
    <Box
      row
      justifyContent="space-around"
      marginVertical={ESpacings.s16}
      style={styles.container}>
      {icons.map((icon: string) => {
        return (
          <Icon
            key={icon}
            name={icon}
            type={EIconType.MATERIAL}
            color={Colors.pink}
            size={iconSize}
          />
        )
      })}
    </Box>
  )
});

const styles = StyleSheet.create({
  container: {
    borderBottomColor: Colors.reddish,
    borderBottomWidth: 1,
  }
});
