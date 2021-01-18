import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Typography} from '../../../components';
import {Colors, ERounding, ESpacings} from '../../../constants';

interface IProps {
  instructions: string;
  glass: string;
}

export const Instructions: React.FC<IProps> = ({instructions, glass}) => {
  return (
    <Box
      backgroundColor={Colors.dark}
      width="80%"
      paddingTop={100}
      marginTop={-80}
      paddingBottom={ESpacings.s32}
      marginBottom={ESpacings.s16}
      paddingHorizontal={ESpacings.s16}
      style={styles.shadow}
      borderBottomRightRadius={ERounding.r32}>
      <Typography
        h2
        center
        color={Colors.ice}
        marginVertical={ESpacings.s16}>
        Instructions
      </Typography>
      <Typography body color={Colors.ice}>
        {instructions}
      </Typography>
      <Typography
        h2
        center
        color={Colors.ice}
        marginVertical={ESpacings.s16}>
        Glass
      </Typography>
      <Typography
        body
        color={Colors.ice}>
        {glass}
      </Typography>
    </Box>
  )
};

const styles = StyleSheet.create({
  shadow: {
    elevation: 9,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  }
});
