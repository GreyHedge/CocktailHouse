export interface IIngredientResponse {
  idIngredient: string;
  strIngredient: string;
  strDescription: string | null;
  strType: string | null;
  strAlcohol: string | null;
  strABV: string | null;
}

export interface IIngredientDetail {
  id: string;
  name: string;
  description: string | null;
  type: string | null;
  isAlcohol: boolean;
  abv: string | null;
}
