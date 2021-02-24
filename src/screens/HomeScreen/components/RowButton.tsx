import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Button, Typography, Icon} from '@components';
import {Colors, ESpacings} from '@constants';

interface IProps {
  name: string;
  onPress: () => void;
  icon?: string;
  border?: boolean;
}

export const RowButton: React.FC<IProps> = React.memo(({
  name,
  onPress,
  icon = 'rightsquareo',
  border,
}) => {
  return (
    <Button onPress={onPress}>
      <Box
        row
        justifyContent="space-between"
        paddingVertical={ESpacings.s16}
        paddingRight={ESpacings.s16}
        marginLeft={ESpacings.s16}
        style={border ? styles.container : null}>
        <Typography headLine>
          {name}
        </Typography>
        <Icon name={icon} />
      </Box>
    </Button>
  )
});

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.dark,
  },
});
