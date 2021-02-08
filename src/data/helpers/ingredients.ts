import {
  IIngredientDetail,
  IIngredient,
  IIngredientDetailResponse,
  IIngredientResponse,
  IMapFn,
  IMapArrayFn,
} from '../types';

export const mapIngredientDetail: IMapFn<IIngredientDetail, IIngredientDetailResponse> = (
  resp,
) => {
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

export const mapIngredient: IMapFn<IIngredient, IIngredientResponse> = (resp) => ({
  name: resp.strIngredient1,
});

export const mapIngredients: IMapArrayFn<IIngredient, IIngredientResponse> = (resp) => {
  return resp.map(mapIngredient);
};
