import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet} from 'react-native';
import axios from 'axios';
import {Box, CocktailCard, SmallMenu, Typography} from '@components';
import {ICocktail, mapCocktailList} from '@data';
import {roundButtonsWidth, Colors, ESpacings} from '@constants';

const handleRenderItem = (info: ListRenderItemInfo<ICocktail>) => {
  return (
    <CocktailCard
      cocktail={info.item}
      marginBottom={ESpacings.s16}
    />
  )
};

export const ListScreen: React.FC = () => {
  const [cocktailList, setCocktailList] = useState<ICocktail[] | null>(null);

  useEffect(() => {
    async function getCocktailList(name: string) {
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`);
        setCocktailList(mapCocktailList(response.data.drinks));
      } catch (error) {
        console.error(error);
      }
    }
    getCocktailList('Gin');
  }, []);

  if (!cocktailList) {
    return null;
  }

  return (
    <Box
      backgroundColor={Colors.dark}
      flex={1}>
      <Typography
        title
        color={Colors.ice}
        marginVertical={ESpacings.s16}
        marginLeft={ESpacings.s16}
        marginRight={roundButtonsWidth + ESpacings.s16}>
        Cocktails with Gin
      </Typography>
      <FlatList
        data={cocktailList}
        renderItem={handleRenderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      />
      <SmallMenu onPress={() => {console.log('close pressed')}}/>
    </Box>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: ESpacings.s16,
    paddingRight: roundButtonsWidth + ESpacings.s16,
  }
});
