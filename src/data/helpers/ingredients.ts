import {IIngredientDetail, IIngredientResponse} from '../types';

export const mapIngredient = (resp: IIngredientResponse): IIngredientDetail => {
  const {
    idIngredient: id,
    strIngredient: name,
    strDescription: description,
    strType: type,
    strAlcohol,
    strABV: abv,
  } = resp;

  return {
    id,
    name,
    description,
    abv,
    type,
    isAlcohol: strAlcohol === 'Yes',
  }
};
