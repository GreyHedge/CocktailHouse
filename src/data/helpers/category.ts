import {
  ICategory,
  ICategoryResponse,
  IMapFn,
  IMapArrayFn,
} from '../types';

export const mapCategory: IMapFn<ICategory, ICategoryResponse> = (resp) => ({
  category: resp.strCategory,
});

export const mapCategoryList: IMapArrayFn<ICategory, ICategoryResponse> = (resp) => {
  return resp.map((item ) => mapCategory(item));
};
