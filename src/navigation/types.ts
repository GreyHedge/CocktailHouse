import {StackScreenProps} from '@react-navigation/stack';
import {EFilter} from '@data';

export enum EScreens {
  HOME_SCREEN = 'HomeScreen',
  COCKTAIL_SCREEN = 'CocktailScreen',
  INGREDIENT_SCREEN = 'IngredientScreen',
  COCKTAIL_LIST_SCREEN = 'CocktailListScreen',
  INGREDIENT_LIST_SCREEN = 'IngredientListScreen',
}

export type HomeStackParamList = {
  [EScreens.HOME_SCREEN]: undefined;
  [EScreens.COCKTAIL_SCREEN]: {id: string};
  [EScreens.INGREDIENT_SCREEN]: {name: string};
  [EScreens.COCKTAIL_LIST_SCREEN]: {title?: string; queryString: string; filter: EFilter};
  [EScreens.INGREDIENT_LIST_SCREEN]: undefined;
}

export type HomeScreenProps = StackScreenProps<HomeStackParamList, EScreens.HOME_SCREEN>
export type CocktailScreenProps = StackScreenProps<HomeStackParamList, EScreens.COCKTAIL_SCREEN>
export type IngredientScreenProps = StackScreenProps<HomeStackParamList, EScreens.INGREDIENT_SCREEN>
export type CocktailListScreenProps = StackScreenProps<HomeStackParamList, EScreens.COCKTAIL_LIST_SCREEN>
