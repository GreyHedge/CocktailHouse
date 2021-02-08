import {
  IAlcoholFilter,
  IAlcoholFiltersResponse,
  IMapFn,
  IMapArrayFn,
} from '../types';

export const mapAlcoholFilter: IMapFn<IAlcoholFilter, IAlcoholFiltersResponse> = (res) => {
  return {name: res.strAlcoholic};
};

export const mapAlcoholFilters: IMapArrayFn<IAlcoholFilter, IAlcoholFiltersResponse> = (res) => {
  return res.map(mapAlcoholFilter);
};
