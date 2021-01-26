import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import axios from 'axios';
import {Box, CocktailCard, RectButton, Typography} from '@components';
import {ICocktail, mapCocktailList} from '@data';
import {Colors, ERounding, ESpacings} from '@constants';

const getRandomCocktail = () => axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
const getPromiseArray = (count: number) => Array.from(new Array(count)).map(() => getRandomCocktail());
const getRandomCocktails = (setCocktails: (cocktails: ICocktail[]) => void) => {
  Promise.all(getPromiseArray(5))
    .then((res) => {
      setCocktails(mapCocktailList(res.map((item) => item.data.drinks[0])))
    })
    .catch((e) => console.log('error', e))
};

export const RandomCocktails: React.FC = () => {
  const [cocktails, setCocktails] = useState<ICocktail[] | null>(null);

  useEffect(() => {
    getRandomCocktails(setCocktails);
  }, []);

  const handleReloadPress = useCallback(() => {
    getRandomCocktails(setCocktails);
  }, []);

  if (!cocktails) {
    return null;
  }

  return (
    <>
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
          Random cocktails
        </Typography>
        <RectButton
          border
          text="Refresh"
          icon="reload1"
          onPress={handleReloadPress}
        />
      </Box>
      <ScrollView
        contentContainerStyle={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {cocktails.map((cocktail) => (
          <CocktailCard
            key={cocktail.id}
            cocktail={cocktail}
            marginRight={ESpacings.s16}
          />
        ))}
      </ScrollView>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: ESpacings.s16,
    paddingBottom:ESpacings.s24,
  },
  button: {
    borderColor: Colors.dark,
    borderWidth: 1,
    borderRadius: ERounding.r8,
    overflow: 'hidden',
  },
});
