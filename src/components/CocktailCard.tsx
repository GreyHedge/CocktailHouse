import React, {useCallback} from 'react';
import {Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Box} from './Box';
import {Button} from './Button';
import {LikeButton} from './LikeButton';
import {Typography} from './Typography';
import {roundButtonsWidth, Colors, ERounding, ESpacings, ImageSize} from '@constants';
import {ICocktail} from '@data';
import {commonStyles} from '@helpers';
import {EScreens} from '@navigation';

interface IProps {
  cocktail: ICocktail;
  marginBottom?: ESpacings | number;
  marginRight?: ESpacings | number;
}

export const CocktailCard: React.FC<IProps> = React.memo(({
  cocktail,
  marginBottom = ESpacings.s0,
  marginRight = ESpacings.s0,
}) => {
  const {id, name, img} = cocktail;
  const {push} = useNavigation();

  const handlePress = useCallback(() => {
    push(EScreens.COCKTAIL_SCREEN, {id})
  }, [id]);

  return (
    <Box
      borderRadius={ERounding.r24}
      style={commonStyles.shadowRight}>
      <Box
        width={ImageSize.M + roundButtonsWidth}
        borderRadius={ERounding.r24}
        marginRight={marginRight}
        marginBottom={marginBottom}
        style={styles.container}>
        <Button
          rippleColor={Colors.reddish}
          onPress={handlePress}
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
            <LikeButton id={id} />
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
    </Box>
  )
});

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    flex: 1,
  },
  button: {
    flex: 1,
    backgroundColor: Colors.pink,
  },
  img: {
    width: ImageSize.M,
    height: ImageSize.M,
    borderTopLeftRadius: ERounding.r24,
  },
});
