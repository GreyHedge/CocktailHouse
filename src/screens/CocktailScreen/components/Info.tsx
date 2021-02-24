import React from 'react';
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
import {Box, Typography} from '@components';
import {TagList} from './TagList';
import {Colors, ESpacings, ImageSize, roundButtonsWidth} from '@constants';
import {commonStyles} from '@helpers';
import {IAlcoholCategory} from '@data';

interface IProps {
  name: string;
  iba: string | null;
  alcoholic: IAlcoholCategory;
  img: ImageSourcePropType;
  category: string;
  glass: string;
}

export const Info: React.FC<IProps> = React.memo(({
  name,
  iba,
  alcoholic,
  img,
  category,
  glass,
}) => {
  return (
    <Box style={styles.container}>
      <Typography
        title
        color={Colors.dark}
        marginRight={roundButtonsWidth + ESpacings.s16}
        marginVertical={ESpacings.s16}
        marginLeft={ESpacings.s16}>
        {name}
      </Typography>
      {!!iba && (
        <>
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
        </>
      )}
      <Box
        backgroundColor={Colors.reddish}
        width={ImageSize.L}
        marginLeft={50}
        style={[styles.imgContainer, commonStyles.shadowRight]}>
        <Image
          style={styles.cocktailImg}
          source={img}
          resizeMode="contain"
        />
        <TagList
          alcoholic={alcoholic}
          category={category}
          glass={glass}
        />
      </Box>
    </Box>
  )
});

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    zIndex: 10,
  },
  cocktailImg: {
    height: ImageSize.L,
    width: ImageSize.L,
  },
  imgContainer: {
    elevation: 10,
  },
});
