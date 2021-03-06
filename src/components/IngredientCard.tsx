import React, {useCallback} from 'react';
import {Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from './Button';
import {Typography} from './Typography';
import {Box} from './Box';
import {EFilter, IIngredient} from '@data';
import {Colors, ERounding, ESpacings, ImageSize} from '@constants';
import {commonStyles, getSmallIngredientImageUrl} from '@helpers';
import {EScreens} from '@navigation';

interface IProps {
  ingredient: IIngredient;
  marginBottom?: number;
  width?: number;
}

export const IngredientCard: React.FC<IProps> = React.memo(({
  ingredient,
  marginBottom = ESpacings.s0,
  width,
}) => {
  const {name} = ingredient;
  const {navigate} = useNavigation();

  const handlePress = useCallback(() => {
    navigate(EScreens.COCKTAIL_LIST_SCREEN, {
      queryString: name,
      filter: EFilter.INGREDIENT,
      title: `Cocktails with ${name}`,
    })
  }, [name]);

  return (
    <Box
      borderRadius={ERounding.r8}
      marginBottom={marginBottom}
      style={commonStyles.shadowRight}>
      <Box
        flex={1}
        marginRight={ESpacings.s8}
        borderRadius={ERounding.r8}
        style={commonStyles.noOverflow}>
        <Button
          onPress={handlePress}
          style={[styles.button, {width}]}>
          <Box paddingVertical={ESpacings.s8}>
            <Image
              source={{uri: getSmallIngredientImageUrl(name)}}
              style={styles.img}
              resizeMode="contain"
            />
            <Typography
              h2
              center
              paddingHorizontal={ESpacings.s8}
              color={Colors.dark}>
              {name}
            </Typography>
          </Box>
        </Button>
      </Box>
    </Box>
  )
});

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.ice,
    flex: 1,
  },
  img: {
    height: ImageSize.S,
    width: ImageSize.S,
    alignSelf: 'center',
  },
});
