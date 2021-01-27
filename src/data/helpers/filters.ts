import {IAlcoholFilter, IAlcoholFiltersResponse} from '../types';

export const mapAlcoholFilter = (res: IAlcoholFiltersResponse): IAlcoholFilter => {
  return {name: res.strAlcoholic};
};

export const mapAlcoholFilters = (res: IAlcoholFiltersResponse[]): IAlcoholFilter[] => {
  return res.map(mapAlcoholFilter);
};
