import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Typography} from '../../../components';
import {Colors, ESpacings} from '../../../constants';

export const Buttons: React.FC = () => {
  return (
    <Box
      backgroundColor={Colors.blue}
      width={50}
      marginTop={50}
      paddingVertical={ESpacings.s16}
      borderBottomLeftRadius={25}
      borderTopLeftRadius={25}
      alignItems="center"
      style={styles.container}>
      <Box
        width={50}
        height={50}
        borderRadius={25}
        alignItems="center"
        justifyContent="center">
        <Typography h3>
          X
        </Typography>
      </Box>
      <Box
        width={50}
        height={50}
        borderRadius={25}
        alignItems="center"
        justifyContent="center">
        <Typography h3>
          X
        </Typography>
      </Box>
    </Box>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
  }
});
