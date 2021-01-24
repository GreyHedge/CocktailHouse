import React, {useCallback, useEffect, useState} from 'react';
import {ICocktail, mapCocktailList} from "@data";
import {Colors, ERounding, ESpacings} from "@constants";
import {Box, Button, CocktailCard, Typography} from "@components";
import axios from "axios";
import {ScrollView, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const getRandomCocktail = () => axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
const getPromiseArray = (count: number) => Array.from(new Array(count)).map((_) => getRandomCocktail());
const getRandomCocktails = (setCocktails: (cocktails: ICocktail[]) => void) => {
  Promise.all(getPromiseArray(5))
    .then((res) => {
      setCocktails(mapCocktailList(res.map((item) => item.data.drinks[0])))
    })
    .catch((e) => console.log('error', e))
};

export const RandomCocktail: React.FC = () => {
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
          marginVertical={ESpacings.s16}>
          Random cocktails
        </Typography>
        <Box style={styles.button}>
          <Button onPress={handleReloadPress}>
            <Box
              row
              paddingHorizontal={ESpacings.s16}
              justifyContent="center"
              alignItems="center">
              <Typography
                h2
                semibold
                marginRight={ESpacings.s8}
                marginVertical={ESpacings.s8}>
                Refresh
              </Typography>
              <Icon
                name="reload1"
                size={20}
              />
            </Box>
          </Button>
        </Box>
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
    marginBottom: ESpacings.s24,
  },
  button: {
    borderColor: Colors.dark,
    borderWidth: 1,
    borderRadius: ERounding.r8,
    overflow: 'hidden',
  },
});
