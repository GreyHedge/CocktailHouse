import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Typography, Button, Icon} from '@components';
import {Colors, ESpacings} from '@constants';

interface IProps {
  name: string;
  value: string;
  isLast?: boolean;
  onPress: ()  => void;
}

export const Tag: React.FC<IProps> = React.memo(({
  name,
  value,
  isLast = false,
  onPress,
}) => {
  return (
    <Button rippleColor={Colors.blue} onPress={onPress}>
      <Box
        row
        alignItems="center"
        marginLeft={ESpacings.s8}
        paddingVertical={ESpacings.s8}
        paddingRight={ESpacings.s16}
        style={isLast ? null : styles.border}>
        <Icon name="tago" />
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
        <Icon name="rightsquareo" />
      </Box>
    </Button>
  )
});

const styles = StyleSheet.create({
  border: {
    borderBottomColor: Colors.dark,
    borderBottomWidth: 1,
  },
});
