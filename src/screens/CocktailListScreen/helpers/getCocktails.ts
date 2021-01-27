import axios, {AxiosPromise} from 'axios';
import {
  baseUrl,
  cocktailsByCategory,
  cocktailsByGlass,
  cocktailsByIngredient,
  cocktailsByLetter,
  cocktailsByName,
  cocktailsByAlcohol,
} from '@constants';
import {EFilter, ICocktailDetailResponse} from '@data';

type IResponsePromise = {
  drinks: ICocktailDetailResponse[]
}

export const getCocktailsByLetter = (letter: string): AxiosPromise<IResponsePromise> => {
  return axios.get(`${baseUrl}${cocktailsByLetter}${letter}`);
};

export const getCocktailsByName = (name: string): AxiosPromise<IResponsePromise> => {
  return axios.get(`${baseUrl}${cocktailsByName}${name}`);
};

export const getCocktailsByCategory = (category: string): AxiosPromise<IResponsePromise> => {
  return axios.get(`${baseUrl}${cocktailsByCategory}${category}`);
};

export const getCocktailsByGlass = (glass: string): AxiosPromise<IResponsePromise> => {
  return axios.get(`${baseUrl}${cocktailsByGlass}${glass}`);
};

export const getCocktailsByIngredient = (ingredient: string): AxiosPromise<IResponsePromise> => {
  return axios.get(`${baseUrl}${cocktailsByIngredient}${ingredient}`);
};

export const getAlcoholCocktails = (
  alcoholFilter: EFilter.ALCOHOLIC | EFilter.NON_ALCOHOLIC | EFilter.OPTIONAL_ALCOHOL,
): AxiosPromise<IResponsePromise> => {
  return axios.get(`${baseUrl}${cocktailsByAlcohol}${alcoholFilter}`);
};

export const getCocktails = (filterType: EFilter, queryString: string): AxiosPromise<IResponsePromise> | Error => {
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
