import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import axios from 'axios';
import {IngredientListScreenProps} from '@navigation';
import {Box, IngredientCard, SmallMenu, Typography} from '@components';
import {Colors, ESpacings, roundButtonsWidth} from '@constants';
import {IIngredient, mapIngredients} from '@data';
import {width} from '@helpers';
import {UpButton} from "./components";

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
  const [ingredients, setIngredients] = useState<IIngredient[] | null>(null);
  const listRef = useRef<FlatList>(null);

  const handleUpPress = useCallback(() => {
    listRef.current?.scrollToOffset({offset: 0, animated: true})
  }, []);

  useEffect(() => {
    async function getIngredients() {
      try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
        setIngredients(mapIngredients(response.data.drinks));
      } catch (error) {
        console.error(error);
      }
    }
    getIngredients();
  }, []);

  if (!ingredients) {
    return null;
  }

  return (
    <Box
      flex={1}
      backgroundColor={Colors.dark}>
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
        contentContainerStyle={{marginLeft: ESpacings.s16, marginRight: ESpacings.s16 + roundButtonsWidth, paddingBottom: ESpacings.s32}}
      />
      <SmallMenu />
      <UpButton onPress={handleUpPress}/>
    </Box>
  )
};
