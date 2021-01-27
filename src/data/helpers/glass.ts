import {IGlass, IGlassResponse} from '@data';

export const mapGlass = (resp: IGlassResponse): IGlass => ({
  glass: resp.strGlass,
});

export const mapGlassList = (resp: IGlassResponse[]): IGlass[] => {
  return resp.map((item ) => mapGlass(item));
};
