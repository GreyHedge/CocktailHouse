import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Typography} from '@components';
import {Category} from './Category';
import {allCategories, Colors, ESpacings, EQueryKeys} from '@constants';
import {ICategory, ICategoryResponse, mapCategoryList} from '@data';
import {useGetArrayData} from '@hooks';

export const Categories: React.FC = React.memo(() => {
  const {data: categories} = useGetArrayData<ICategory, ICategoryResponse>(
    EQueryKeys.ALL_CATEGORIES,
    allCategories,
    mapCategoryList,
  );

  if (!categories) {
    return null;
  }

  return (
    <Box marginBottom={ESpacings.s24}>
      <Box
        row
        justifyContent="space-between"
        alignItems="center"
        marginHorizontal={ESpacings.s16}
        marginVertical={ESpacings.s16}>
        <Typography
          h1
          color={Colors.dark}
          marginVertical={ESpacings.s16}>
          Categories
        </Typography>
      </Box>
      <Box
        row
        marginLeft={ESpacings.s16}
        marginRight={ESpacings.s8}
        style={styles.container}>
        {categories.map(({category}) => {
          if(!category) {
            return null;
          }

          return (
            <Category
              key={category}
              category={category}
            />
          )
        })}
      </Box>
    </Box>
  )
});

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
  },
});
