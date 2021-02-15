import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Tag} from './Tag';
import {Box} from '@components';
import {EScreens} from '@navigation';
import {EFilter, IAlcoholCategory} from '@data';

interface IProps {
  alcoholic: IAlcoholCategory;
  category: string;
  glass: string;
}

export const TagList: React.FC<IProps> = ({
  alcoholic,
  category,
  glass,
}) => {
  const {navigate} = useNavigation();

  const handleCategoryPress = useCallback(() => {
    navigate(EScreens.COCKTAIL_LIST_SCREEN, {
      filter: EFilter.CATEGORY,
      queryString: category,
      title: category,
    })
  }, [category]);

  const handleGlassPress = useCallback(() => {
    navigate(EScreens.COCKTAIL_LIST_SCREEN, {
      filter: EFilter.GLASS,
      queryString: glass,
      title: glass,
    });
  }, [glass]);

  const handleAlcoholPress = useCallback(() => {
    navigate(EScreens.COCKTAIL_LIST_SCREEN, {
      filter: alcoholic.toLowerCase(),
      queryString: alcoholic,
      title: `${alcoholic} cocktails`,
    });
  }, [alcoholic]);

  return (
    <Box>
      <Tag
        name="Contain alcohol"
        value={alcoholic}
        onPress={handleAlcoholPress}
      />
      <Tag
        name="Category"
        value={category}
        onPress={handleCategoryPress}
      />
      <Tag
        name="Glass"
        value={glass}
        onPress={handleGlassPress}
        isLast
      />
    </Box>
  )
};
