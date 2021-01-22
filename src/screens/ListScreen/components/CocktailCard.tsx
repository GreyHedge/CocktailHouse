import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Box, Button, MenuButton, Typography} from '@components';
import {buttonsMenuWidth, cocktailCardImageSize, Colors, ERounding, ESpacings} from '@constants';
import {ICocktail} from '@data';

interface IProps {
  cocktail: ICocktail;
}

export const CocktailCard: React.FC<IProps> = ({cocktail}) => {
  const {name, img} = cocktail;

  return (
    <Box
      width={cocktailCardImageSize + buttonsMenuWidth}
      borderRadius={ERounding.r24}
      marginBottom={ESpacings.s16 + 50}
      backgroundColor={Colors.pink}
      style={styles.container}>
      <Button
        rippleColor={Colors.reddish}
        onPress={() => {console.log(name)}}>
        <Box
          row
          justifyContent="space-between"
          alignItems="flex-start">
          <Image
            source={{uri: img}}
            style={styles.img}
            resizeMode="contain"
          />
          <MenuButton
            icon="hearto"
            onPress={() => {console.log('heart1')}}
          />
        </Box>
        <Typography
          h2
          color={Colors.dark}
          paddingRight={buttonsMenuWidth}
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
  img: {
    width: cocktailCardImageSize,
    height: cocktailCardImageSize,
    borderTopLeftRadius: ERounding.r24,
  }
});
