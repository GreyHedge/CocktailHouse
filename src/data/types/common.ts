export type IResponse<T> = {
  drinks: T;
  ingredients: T;
}

export type IMapFn<T,U> = (data: U) => T

export type IMapArrayFn<T,U> = (data: U[]) => T[]

export enum EResponseField {
  DRINKS = 'drinks',
  INGREDIENTS = 'ingredients',
}
