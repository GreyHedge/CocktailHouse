import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {
  CocktailListScreen,
  CocktailScreen,
  HomeScreen,
  IngredientScreen,
  IngredientListScreen,
  GlassListScreen,
  FavoriteListScreen,
} from '@screens';
import {EScreens} from './types';

const Stack = createStackNavigator();

export const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={EScreens.HOME_SCREEN}
        component={HomeScreen}
      />
      <Stack.Screen
        name={EScreens.COCKTAIL_SCREEN}
        component={CocktailScreen}
      />
      <Stack.Screen
        name={EScreens.COCKTAIL_LIST_SCREEN}
        component={CocktailListScreen}
      />
      <Stack.Screen
        name={EScreens.INGREDIENT_SCREEN}
        component={IngredientScreen}
      />
      <Stack.Screen
        name={EScreens.INGREDIENT_LIST_SCREEN}
        component={IngredientListScreen}
      />
      <Stack.Screen
        name={EScreens.GLASS_LIST_SCREEN}
        component={GlassListScreen}
      />
      <Stack.Screen
        name={EScreens.FAVORITES_LIST_SCREEN}
        component={FavoriteListScreen}
      />
    </Stack.Navigator>
  )
};
