import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Box, Typography} from '@components';
import {Category} from './Category';
import {Colors, ESpacings} from '@constants';
import {ICategory, mapCategoryList} from '@data';
import {StyleSheet} from "react-native";

export const Categories: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[] | null>(null);

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
        setCategories(mapCategoryList(response.data.drinks));
      } catch (error) {
        console.error(error);
      }
    }
    getCategories();
  }, []);

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
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
  },
});
