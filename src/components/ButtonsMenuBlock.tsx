import React, {ReactNode} from 'react';
import {StyleSheet} from 'react-native';
import {Box} from './Box';
import {buttonsMenuWidth, Colors, ESpacings} from '../constants';

interface IProps {
  children: ReactNode;
}

export const ButtonsMenuBlock: React.FC<IProps> = ({children}) => {
  return (
    <Box
      backgroundColor={Colors.blue}
      width={buttonsMenuWidth}
      marginTop={50}
      paddingVertical={ESpacings.s16}
      borderBottomLeftRadius={25}
      borderTopLeftRadius={25}
      alignItems="center"
      style={styles.container}>
      {children}
    </Box>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    elevation: 10,
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  }
});
