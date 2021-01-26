import React from 'react';
import {StyleSheet} from 'react-native';
import {Box} from '@components';
import {Letter} from './Letter';
import {alphabet, Colors, ERounding} from '@constants';

export const LetterSearch: React.FC = () => {
  return (
    <Box
      row
      justifyContent="center"
      backgroundColor={Colors.dark}
      borderBottomRightRadius={ERounding.r24}
      borderBottomLeftRadius={ERounding.r24}
      style={styles.alphabetContainer}>
      {alphabet.map((letter) => {
        return <Letter key={letter} letter={letter} />
      })}
    </Box>
  )
};

const styles = StyleSheet.create({
  alphabetContainer: {
    flexWrap: 'wrap',
  },
});
