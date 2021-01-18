import React from 'react';
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
import {Box, Typography} from '../../../components';
import {Tag} from './Tag';
import {Colors, ESpacings} from '../../../constants';

interface IProps {
  name: string;
  iba: string;
  isAlcohol: boolean;
  img: ImageSourcePropType;
  category: string;
}

export const Info: React.FC<IProps> = ({
  name,
  iba,
  isAlcohol,
  img,
  category,
}) => {
  return (
    <Box style={{elevation: 10, zIndex: 10}}>
      <Typography
        title
        color={Colors.dark}
        paddingRight={60}
        marginVertical={ESpacings.s16}
        marginLeft={ESpacings.s16}>
        {name}
      </Typography>
      <Typography
        h3
        color={Colors.dark}
        marginLeft={ESpacings.s16}>
        IBA
      </Typography>
      <Typography
        body
        color={Colors.dark}
        paddingRight={60}
        marginBottom={ESpacings.s16}
        marginLeft={ESpacings.s16}>
        {iba}
      </Typography>
      <Box
        backgroundColor={Colors.reddish}
        width={250}
        marginLeft={50}
        style={styles.imgContainer}>
        <Image
          style={styles.cocktailImg}
          source={img}
          resizeMode="contain"
        />
        <Box>
          <Tag name="Contain alcohol" value="Yes"/>
          <Tag name="Category" value="Ordinary Drink"/>
          <Tag name="Glass" value="Cocktail glass" isLast/>
        </Box>
      </Box>
    </Box>
  )
};

const styles = StyleSheet.create({
  cocktailImg: {
    height: 250,
    width: 250,
  },
  imgContainer: {
    elevation: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
