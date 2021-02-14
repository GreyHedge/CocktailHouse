import {
  ICocktail,
  ICocktailResponse,
  ICocktailDetail,
  ICocktailDetailResponse,
  IMapFn,
  IMapArrayFn,
} from '../types';

export const mapCocktailDetails: IMapFn<ICocktailDetail,ICocktailDetailResponse> = (resp) => {
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
    alcoholic: strAlcoholic,
    ...mapCocktail(rest),
  };
};

export const mapCocktail: IMapFn<ICocktail, ICocktailResponse> = (resp) => {
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

export const mapCocktailList: IMapArrayFn<ICocktail, ICocktailResponse> = (resp) => {
  if (!resp) {
    return [];
  }
  return resp.map((item ) => mapCocktail(item));
};
