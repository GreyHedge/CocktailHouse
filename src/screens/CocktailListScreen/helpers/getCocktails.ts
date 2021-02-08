import {
  baseUrl,
  cocktailsByCategory,
  cocktailsByGlass,
  cocktailsByIngredient,
  cocktailsByLetter,
  cocktailsByName,
  cocktailsByAlcohol,
} from '@constants';
import {EFilter} from '@data';

export const getCocktailsByLetter = (letter: string): string => {
  return `${baseUrl}${cocktailsByLetter}${letter}`;
};

export const getCocktailsByName = (name: string): string => {
  return `${baseUrl}${cocktailsByName}${name}`;
};

export const getCocktailsByCategory = (category: string): string => {
  return `${baseUrl}${cocktailsByCategory}${category}`;
};

export const getCocktailsByGlass = (glass: string): string => {
  return `${baseUrl}${cocktailsByGlass}${glass}`;
};

export const getCocktailsByIngredient = (ingredient: string): string => {
  return `${baseUrl}${cocktailsByIngredient}${ingredient}`;
};

export const getAlcoholCocktails = (
  alcoholFilter: EFilter.ALCOHOLIC | EFilter.NON_ALCOHOLIC | EFilter.OPTIONAL_ALCOHOL,
): string => {
  return `${baseUrl}${cocktailsByAlcohol}${alcoholFilter}`;
};

export const getCocktails = (filterType: EFilter, queryString: string): string | Error => {
  switch (filterType) {
    case EFilter.LETTER:
      return getCocktailsByLetter(queryString);
    case EFilter.NAME:
      return getCocktailsByName(queryString);
    case EFilter.CATEGORY:
      return getCocktailsByCategory(queryString);
    case EFilter.GLASS:
      return getCocktailsByGlass(queryString);
    case EFilter.INGREDIENT:
      return getCocktailsByIngredient(queryString);
    case EFilter.ALCOHOLIC:
    case EFilter.NON_ALCOHOLIC:
    case EFilter.OPTIONAL_ALCOHOL:
      return getAlcoholCocktails(filterType);
    default:
      throw 'no such filter';
  }
};
