import {ingredientsImagesUrl} from '@constants';

enum EImageSize {
  SMALL = 'Small',
  MEDIUM = 'Medium',
}

export const getSmallIngredientImageUrl = (name: string): string =>
  `${ingredientsImagesUrl}${name}-${EImageSize.SMALL}.png`;

export const getMediumIngredientImageUrl = (name: string): string =>
  `${ingredientsImagesUrl}${name}-${EImageSize.MEDIUM}.png`;
