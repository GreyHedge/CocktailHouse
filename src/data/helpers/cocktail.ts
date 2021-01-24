import {
  ICocktail,
  ICocktailResponse,
  ICocktailDetail,
  ICocktailDetailResponse,
} from '../types';

export const mapCocktailDetails = (resp: ICocktailDetailResponse): ICocktailDetail => {
  const {
    strCategory: category,
    strIBA: iba,
    strGlass: glass,
    strInstructions: instructions,
    strAlcoholic,
    ...rest
  } = resp;
  const ingredients = [];
  for (let i = 1; i <16 ; i++) {
    const name = resp[`strIngredient${i}`];
    const value = resp[`strMeasure${i}`];
    if (name) {
      ingredients.push({name, value})
    } else {
      break;
    }
  }

  return {
    iba,
    category,
    glass,
    ingredients,
    instructions,
    isAlcohol: strAlcoholic === 'Alcoholic',
    ...mapCocktail(rest),
  };
};

export const mapCocktail = (resp: ICocktailResponse): ICocktail => {
  const {
    idDrink: id,
    strDrink: name,
    strDrinkThumb: img,
  } = resp;

  return {
    id,
    name,
    img,
  }
};

export const mapCocktailList = (resp: ICocktailResponse[]): ICocktail[] => {
  return resp.map((item ) => mapCocktail(item));
};
