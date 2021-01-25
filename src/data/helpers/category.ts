import {ICategory, ICategoryResponse} from '../types';

export const mapCategory = (resp: ICategoryResponse): ICategory => ({
  category: resp.strCategory,
});

export const mapCategoryList = (resp: ICategoryResponse[]): ICategory[] => {
  return resp.map((item ) => mapCategory(item));
};
