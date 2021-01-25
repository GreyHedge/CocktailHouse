export interface IIngredientDetailResponse {
  idIngredient: string;
  strIngredient: string;
  strDescription: string | null;
  strType: string | null;
  strAlcohol: string | null;
  strABV: string | null;
}

export interface IIngredientResponse {
  strIngredient1: string;
}

export interface IIngredientDetail extends IIngredient {
  id: string;
  description: string | null;
  type: string | null;
  isAlcohol: boolean;
  abv: string | null;
}

export interface IIngredient {
  name: string;
}
