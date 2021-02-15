import React, {useCallback, useRef} from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet} from 'react-native';
import {IngredientListScreenProps} from '@navigation';
import {
  ScreenWrapper,
  IngredientCard,
  Typography,
  Loader,
  UpButton,
} from '@components';
import {allIngredients, Colors, ESpacings, roundButtonsWidth, EQueryKeys} from '@constants';
import {IIngredient, IIngredientResponse, mapIngredients} from '@data';
import {width} from '@helpers';
import {useGetArrayData} from '@hooks';

const cardWidth = (width - roundButtonsWidth - ESpacings.s16 * 2 - ESpacings.s8) / 2;

const renderIngredient = (info: ListRenderItemInfo<IIngredient>) => {
  return (
    <IngredientCard
      width={cardWidth}
      ingredient={info.item}
      marginBottom={ESpacings.s8}
    />
  )
};

const keyExtractor = (item: IIngredient) => item.name;

export const IngredientListScreen: React.FC<IngredientListScreenProps> = () => {
  const {data: ingredients, isLoading} = useGetArrayData<IIngredient, IIngredientResponse>(
    EQueryKeys.ALL_INGREDIENTS,
    allIngredients,
    mapIngredients,
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
      {!!ingredients && (
        <>
          <Typography
            title
            color={Colors.ice}
            marginLeft={ESpacings.s16}
            marginVertical={ESpacings.s16}>
            Ingredients
          </Typography>
          <FlatList
            ref={listRef}
            data={ingredients}
            keyExtractor={keyExtractor}
            renderItem={renderIngredient}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
          />
        </>
      )}
      <UpButton onPress={handleUpPress} />
    </ScreenWrapper>

  )
};

const styles = StyleSheet.create({
  container: {
    marginLeft: ESpacings.s16,
    marginRight: ESpacings.s16 + roundButtonsWidth,
    paddingBottom: ESpacings.s32,
  },
});
