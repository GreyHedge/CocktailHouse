import {StackScreenProps} from '@react-navigation/stack';
import {EFilter} from '@data';
import {RouteProp} from "@react-navigation/native";

export enum EScreens {
  HOME_SCREEN = 'HomeScreen',
  COCKTAIL_SCREEN = 'CocktailScreen',
  INGREDIENT_SCREEN = 'IngredientScreen',
  COCKTAIL_LIST_SCREEN = 'CocktailListScreen',
  INGREDIENT_LIST_SCREEN = 'IngredientListScreen',
  GLASS_LIST_SCREEN = 'GlassListScreen',
  FAVORITES_LIST_SCREEN = 'FavoritesListScreen',
}

export type HomeStackParamList = {
  [EScreens.HOME_SCREEN]: undefined;
  [EScreens.COCKTAIL_SCREEN]: {id: string};
  [EScreens.INGREDIENT_SCREEN]: {name: string};
  [EScreens.COCKTAIL_LIST_SCREEN]: {title?: string; queryString: string; filter: EFilter};
  [EScreens.INGREDIENT_LIST_SCREEN]: undefined;
  [EScreens.GLASS_LIST_SCREEN]: undefined;
  [EScreens.FAVORITES_LIST_SCREEN]: undefined;
}

export type HomeScreenProps = StackScreenProps<HomeStackParamList, EScreens.HOME_SCREEN>
export type CocktailScreenProps = StackScreenProps<HomeStackParamList, EScreens.COCKTAIL_SCREEN>
export type IngredientScreenProps = StackScreenProps<HomeStackParamList, EScreens.INGREDIENT_SCREEN>
export type CocktailListScreenProps = StackScreenProps<HomeStackParamList, EScreens.COCKTAIL_LIST_SCREEN>
export type GlassListScreenProps = StackScreenProps<HomeStackParamList, EScreens.GLASS_LIST_SCREEN>
export type IngredientListScreenProps = StackScreenProps<HomeStackParamList, EScreens.INGREDIENT_LIST_SCREEN>

export type CocktailScreenParams = RouteProp<HomeStackParamList, EScreens.COCKTAIL_SCREEN>
