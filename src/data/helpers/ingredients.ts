import {
  IIngredientDetail,
  IIngredient,
  IIngredientDetailResponse,
  IIngredientResponse,
} from '../types';

export const mapIngredientDetail = (resp: IIngredientDetailResponse): IIngredientDetail => {
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

export const mapIngredient = (resp: IIngredientResponse): IIngredient => ({
  name: resp.strIngredient1,
});

export const mapIngredients = (resp: IIngredientResponse[]): IIngredient[] => {
  return resp.map(mapIngredient);
};
