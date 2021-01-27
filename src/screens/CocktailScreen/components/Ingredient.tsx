import React, {useCallback} from 'react';
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Box, Button, Typography} from '@components';
import {Colors, ESpacings} from '@constants';
import {EScreens} from "@navigation";

export interface IIngredient {
  name: string;
  img: ImageSourcePropType;
  dose: string | null;
  isLast?: boolean;
}

export const Ingredient: React.FC<IIngredient> = ({
  name,
  img,
  dose,
  isLast = false,
}) => {
  const {navigate} = useNavigation();

  const handlePress = useCallback(() => {
    navigate(EScreens.INGREDIENT_SCREEN, {name})
  }, [name]);

  return (
    <Button onPress={handlePress}>
      <Box
        row
        marginLeft={ESpacings.s8}
        alignItems="center"
        paddingTop={ESpacings.s8}
        paddingRight={60}
        paddingBottom={ESpacings.s8}
        style={isLast ? null : styles.border}>
        <Image
          style={styles.ingredientImg}
          source={img}
          resizeMode="contain"
        />
        <Box
          justifyContent="center"
          marginRight={ESpacings.s8}
          flex={1}>
          <Typography h3 color={Colors.dark}>{name}</Typography>
          {dose && (
            <Typography
              body
              color={Colors.dark}>
              {dose}
            </Typography>
          )}
        </Box>
        <Icon
          name={"rightsquareo"}
          color={Colors.dark}
          size={20}
        />
      </Box>
    </Button>
  )
};

const styles = StyleSheet.create({
  ingredientImg: {
    height: 100,
    width: 100,
  },
  border: {
    borderBottomColor: Colors.dark,
    borderBottomWidth: 1,
  },
});
