import {ESpacings} from '../../constants';

export interface IMargins {
  margin?: ESpacings | number;
  marginTop?: ESpacings | number;
  marginBottom?: ESpacings | number;
  marginLeft?: ESpacings | number;
  marginRight?: ESpacings | number;
  marginVertical?: ESpacings | number;
  marginHorizontal?: ESpacings | number;
}

export interface IPaddings {
  padding?: ESpacings | number;
  paddingTop?: ESpacings | number;
  paddingBottom?: ESpacings | number;
  paddingLeft?: ESpacings | number;
  paddingRight?: ESpacings | number;
  paddingVertical?: ESpacings | number;
  paddingHorizontal?: ESpacings | number;
}

export const getPaddings = (paddings: IPaddings) => {
  const style = [];
  const {padding, paddingTop, paddingBottom, paddingLeft, paddingRight, paddingHorizontal, paddingVertical} = paddings;
  padding && style.push({padding});
  paddingTop && style.push({paddingTop});
  paddingBottom && style.push({paddingBottom});
  paddingLeft && style.push({paddingLeft});
  paddingRight && style.push({paddingRight});
  paddingHorizontal && style.push({paddingHorizontal});
  paddingVertical && style.push({paddingVertical});

  return style;
};

export const getMargins = (margins: IMargins) => {
  const style = [];
  const {margin, marginTop, marginBottom, marginLeft, marginRight, marginHorizontal, marginVertical} = margins;
  margin && style.push({margin});
  marginTop && style.push({marginTop});
  marginBottom && style.push({marginBottom});
  marginLeft && style.push({marginLeft});
  marginRight && style.push({marginRight});
  marginHorizontal && style.push({marginHorizontal});
  marginVertical && style.push({marginVertical});

  return style;
};
