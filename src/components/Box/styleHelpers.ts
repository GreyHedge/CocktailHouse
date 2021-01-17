import {getPaddings, getMargins} from '../helpers';
import {IBoxProps} from './Box';

export const getStyleAndRestProps = (props: Omit<IBoxProps, 'children'>) => {
  const {
    flex,
    width,
    height,
    row,
    justifyContent,
    alignItems,
    backgroundColor,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingHorizontal,
    paddingVertical,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginHorizontal,
    marginVertical,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    style,
    ...restProps
  } = props;
  const boxStyle = [
    flex ? {flex} : null,
    width ? {width} : null,
    height ? {height} : null,
    row ? {flexDirection: 'row'} : null,
    justifyContent ? {justifyContent} : null,
    alignItems ? {alignItems} : null,
    backgroundColor ? {backgroundColor} : null,
    borderRadius ? {borderRadius} : null,
    borderTopLeftRadius ? {borderTopLeftRadius} : null,
    borderTopRightRadius ? {borderTopRightRadius} : null,
    borderBottomLeftRadius ? {borderBottomLeftRadius} : null,
    borderBottomRightRadius ? {borderBottomRightRadius} : null,
    ...getPaddings({
      padding,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingHorizontal,
      paddingVertical,
    }),
    ...getMargins({
      margin,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      marginHorizontal,
      marginVertical,
    }),
    style,
  ];

  return {
    boxStyle,
    restProps,
  }
};
