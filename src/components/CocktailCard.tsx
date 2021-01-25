import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Box, Button, RoundButton, Typography} from '@components';
import {roundButtonsWidth, Colors, ERounding, ESpacings, ImageSize} from '@constants';
import {ICocktail} from '@data';

interface IProps {
  cocktail: ICocktail;
  marginBottom?: ESpacings | number;
  marginRight?: ESpacings | number;
}

export const CocktailCard: React.FC<IProps> = ({
  cocktail,
  marginBottom = ESpacings.s0,
  marginRight = ESpacings.s0,
}) => {
  const {name, img} = cocktail;

  return (
    <Box
      width={ImageSize.M + roundButtonsWidth}
      borderRadius={ERounding.r24}
      marginRight={marginRight}
      marginBottom={marginBottom}
      backgroundColor={Colors.pink}
      style={styles.container}>
      <Button
        rippleColor={Colors.reddish}
        onPress={() => {console.log(name)}}
        style={styles.button}>
        <Box
          row
          justifyContent="space-between"
          alignItems="flex-start">
          <Image
            source={{uri: img}}
            style={styles.img}
            resizeMode="contain"
          />
          <RoundButton
            icon="hearto"
            onPress={() => {console.log('heart1')}}
          />
        </Box>
        <Typography
          h2
          color={Colors.dark}
          paddingRight={roundButtonsWidth}
          marginVertical={ESpacings.s16}
          marginLeft={ESpacings.s16}>
          {name}
        </Typography>
      </Button>
    </Box>
  )
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  button: {
    flex: 1,
  },
  img: {
    width: ImageSize.M,
    height: ImageSize.M,
    borderTopLeftRadius: ERounding.r24,
  }
});
