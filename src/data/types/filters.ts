export enum EFilter {
  NAME = 'name',
  LETTER = 'letter',
  CATEGORY = 'category',
  GLASS = 'glass',
  INGREDIENT = 'ingredient',
  ALCOHOLIC = 'alcoholic',
  NON_ALCOHOLIC = 'non alcoholic',
  OPTIONAL_ALCOHOL = 'optional alcohol',
}

export interface IAlcoholFiltersResponse {
  strAlcoholic: string;
}

export interface IAlcoholFilter {
  name: string;
}

export type IAlcoholCategory = EFilter.ALCOHOLIC | EFilter.NON_ALCOHOLIC | EFilter.OPTIONAL_ALCOHOL;
