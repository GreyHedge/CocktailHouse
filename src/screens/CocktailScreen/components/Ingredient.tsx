import React from 'react';
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Typography, Box, Button} from '../../../components';
import {Colors, ESpacings} from '../../../constants';

export interface IIngredient {
  name: string;
  img: ImageSourcePropType;
  dose: string | null;
  isLast?: boolean
}

export const Ingredient: React.FC<IIngredient> = ({
  name,
  img,
  dose,
  isLast = false,
}) => {
  return (
    <Button onPress={() => {console.log('press on ' + name)}}>
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
        <Box justifyContent="center" flex={1}>
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
