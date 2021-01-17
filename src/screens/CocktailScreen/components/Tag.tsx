import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Typography} from '../../../components';
import {Colors, ESpacings} from '../../../constants';

interface IProps {
  name: string;
  value: string;
  isLast?: boolean;
}

export const Tag: React.FC<IProps> = ({
  name,
  value,
  isLast = false,
}) => {
  return (
    <Box
      row
      alignItems="space-between"
      marginLeft={ESpacings.s8}
      paddingVertical={ESpacings.s8}
      justifyContent="center"
      style={isLast ? null : styles.border}>
      <Box flex={1}>
        <Typography
          h3
          color={Colors.dark}>
          {name}
        </Typography>
        <Typography
          body
          color={Colors.dark}>
          {value}
        </Typography>
      </Box>
      <Typography
        h3
        margin={ESpacings.s8}
        color={Colors.dark}>
        &gt;
      </Typography>
    </Box>
  )
};

const styles = StyleSheet.create({
  border: {
    borderBottomColor: Colors.dark,
    borderBottomWidth: 1,
  },
});
