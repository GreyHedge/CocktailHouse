import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, RoundButton} from '@components';
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
        return (
          <RoundButton
            key={letter}
            text={letter}
            color={Colors.ice}
            rippleColor={Colors.ice}
            onPress={() => {console.log('press', letter)}}
          />
        )
      })}
    </Box>
  )
};

const styles = StyleSheet.create({
  alphabetContainer: {
    flexWrap: 'wrap',
  }
});
