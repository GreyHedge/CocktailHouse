import {ICocktail, ICocktailResponse} from '../types';

export const mapCocktail = (resp: ICocktailResponse): ICocktail => {
  const {
    idDrink: id,
    strDrink: name,
    strCategory: category,
    strIBA: iba,
    strGlass: glass,
    strInstructions: instructions,
    strDrinkThumb: img,
    strAlcoholic,
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
    id,
    name,
    category,
    iba,
    glass,
    ingredients,
    instructions,
    img,
    isAlcohol: strAlcoholic === 'Alcoholic',
  };
};
