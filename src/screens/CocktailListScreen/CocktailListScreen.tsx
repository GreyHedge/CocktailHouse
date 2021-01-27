import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet} from 'react-native';
import {AxiosResponse} from 'axios';
import {Box, CocktailCard, SmallMenu, Typography} from '@components';
import {EFilter, ICocktail, ICocktailDetailResponse, mapCocktailList} from '@data';
import {roundButtonsWidth, Colors, ESpacings} from '@constants';
import {CocktailListScreenProps} from '@navigation';
import {getCocktails} from './helpers';

const handleRenderItem = (info: ListRenderItemInfo<ICocktail>) => {
  return (
    <CocktailCard
      cocktail={info.item}
      marginBottom={ESpacings.s16}
    />
  )
};

export const CocktailListScreen: React.FC<CocktailListScreenProps> = ({
  route,
}) => {
  const {params: {title = '', queryString, filter}} = route;
  const [cocktailList, setCocktailList] = useState<ICocktail[] | null>(null);

  useEffect(() => {
    async function getCocktailList(filter: EFilter, queryString: string) {
      try {
        const response: AxiosResponse<{drinks: ICocktailDetailResponse[]}> = await getCocktails(filter, queryString);
        setCocktailList(mapCocktailList(response.data.drinks));
      } catch (error) {
        console.error(error);
      }
    }
    getCocktailList(filter, queryString);
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
        {title}
      </Typography>
      <FlatList
        data={cocktailList}
        renderItem={handleRenderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      />
      <SmallMenu />
    </Box>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: ESpacings.s16,
    paddingRight: roundButtonsWidth + ESpacings.s16,
  }
});

