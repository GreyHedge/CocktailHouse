import React, {useCallback, useRef} from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet} from 'react-native';
import {
  ScreenWrapper,
  CocktailCard,
  Typography,
  Loader,
  UpButton,
  EmptyList,
} from '@components';
import {ICocktail, ICocktailResponse, mapCocktailList} from '@data';
import {roundButtonsWidth, Colors, ESpacings, EQueryKeys} from '@constants';
import {CocktailListScreenProps} from '@navigation';
import {getCocktails} from './helpers';
import {useGetArrayData} from '@hooks';

const minCocktailsNumber = 5;

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
  const {data: cocktailList, isLoading} = useGetArrayData<ICocktail, ICocktailResponse>(
    `${EQueryKeys.COCKTAIL_LIST} ${filter} ${queryString}`,
    getCocktails(filter, queryString),
    mapCocktailList,
    true,
  );
  const listRef = useRef<FlatList>(null);

  const handleUpPress = useCallback(() => {
    listRef.current?.scrollToOffset({offset: 0, animated: true})
  }, []);

  return (
    <ScreenWrapper color={Colors.dark}>
      {isLoading && (
        <Loader color={Colors.ice} />
      )}
      {!!cocktailList && (
        <>
          <Typography
            title
            color={Colors.ice}
            marginVertical={ESpacings.s16}
            marginLeft={ESpacings.s16}
            marginRight={roundButtonsWidth + ESpacings.s16}>
            {title}
          </Typography>
          <FlatList
            ref={listRef}
            data={cocktailList}
            renderItem={handleRenderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
            ListEmptyComponent={EmptyList}
          />
        </>
      )}
      {!!cocktailList && cocktailList.length > minCocktailsNumber && (
        <UpButton onPress={handleUpPress} />
      )}
    </ScreenWrapper>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: ESpacings.s16,
    paddingRight: roundButtonsWidth + ESpacings.s16,
  }
});

