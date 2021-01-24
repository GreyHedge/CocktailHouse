import React from 'react';
import {Box, Button, Typography} from '@components';
import {alphabet, Colors, ESpacings, buttonsMenuWidth} from '@constants';
import {StyleSheet} from "react-native";

export const LetterSearch: React.FC = () => {
  return (
    <>
      <Typography
        h1
        center
        marginVertical={ESpacings.s16}
        color={Colors.dark}>
        Search by first letter
      </Typography>
      <Box
        row
        justifyContent="center"
        style={styles.alphabetContainer}>
        {alphabet.map((letter) => {
          return (
            <Box
              key={letter}
              width={buttonsMenuWidth}
              borderRadius={ESpacings.s24}
              style={styles.letterContainer}>
              <Button onPress={() => {console.log('press', letter)}}>
                <Box
                  height={buttonsMenuWidth}
                  justifyContent="center">
                  <Typography
                    h2
                    center
                    color={Colors.ice}>
                    {letter}
                  </Typography>
                </Box>
              </Button>
            </Box>
          )
        })}
      </Box>
    </>
  )
};

const styles = StyleSheet.create({
  alphabetContainer: {
    flexWrap: 'wrap',
  },
  letterContainer: {
    overflow: 'hidden',
  },
});
