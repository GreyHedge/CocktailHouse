import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
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
      alignItems="center"
      marginLeft={ESpacings.s8}
      paddingVertical={ESpacings.s8}
      paddingRight={ESpacings.s16}
      style={isLast ? null : styles.border}>
      <Icon
        name={"tago"}
        color={Colors.dark}
        size={20}
      />
      <Box flex={1} paddingHorizontal={ESpacings.s16}>
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
      <Icon
        name={"rightsquareo"}
        color={Colors.dark}
        size={20}
      />
    </Box>
  )
};

const styles = StyleSheet.create({
  border: {
    borderBottomColor: Colors.dark,
    borderBottomWidth: 1,
  },
});
