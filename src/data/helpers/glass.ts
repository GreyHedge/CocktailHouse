import {
  IGlass,
  IGlassResponse,
  IMapFn,
  IMapArrayFn,
} from '@data';

export const mapGlass: IMapFn<IGlass, IGlassResponse> = (resp) => ({
  glass: resp.strGlass,
});

export const mapGlassList: IMapArrayFn<IGlass, IGlassResponse> = (resp) => {
  return resp.map((item ) => mapGlass(item));
};
