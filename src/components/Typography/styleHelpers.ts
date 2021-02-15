import {StyleSheet} from 'react-native';
import {ITypographyProps} from '@components';
import {getPaddings, getMargins} from '../helpers';

export const getTextStyleAndRestProps = (props: Omit<ITypographyProps, 'children'>) => {
  const {
    color,
    title,
    h1,
    h2,
    h3,
    headLine,
    body,
    footnote,
    caption,
    semibold,
    bold,
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
    center,
    right,
    merienda,
    style,
    ...restProps
  } = props;
  const textStyles = [
    styles.regular,
    color ? {color} : null,
    center ? styles.center : null,
    right ? styles.right : null,
    title ? styles.title : null,
    h1 ? styles.h1 : null,
    h2 ? styles.h2 : null,
    h3 ? styles.h3 : null,
    headLine ? styles.headLine : null,
    body ? styles.body : null,
    footnote ? styles.footnote : null,
    caption ? styles.caption : null,
    semibold ? styles.semibold : null,
    bold ? styles.bold : null,
    merienda ? styles.merienda : null,
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
    textStyles,
    restProps,
  }
};

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'Montserrat-Regular',
  },
  semibold: {
    fontFamily: 'Montserrat-SemiBold',
  },
  bold: {
    fontFamily: 'Montserrat-Bold',
  },
  title: {
    fontSize: 32,
    lineHeight: 41,
    fontFamily: 'Merienda-Bold',
  },
  h1: {
    fontSize: 20,
    lineHeight: 26,
    fontFamily: 'Montserrat-Bold',
  },
  h2: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: 'Montserrat-Bold',
  },
  h3: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Montserrat-Bold',
  },
  headLine: {
    fontSize: 17,
    lineHeight: 24,
    fontFamily: 'Montserrat-Regular',
  },
  body: {
    fontSize: 15,
    lineHeight: 20,
    fontFamily: 'Montserrat-Regular',
  },
  footnote: {
    fontSize: 13,
    lineHeight: 18,
    fontFamily: 'Montserrat-Regular',
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Montserrat-Regular',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  merienda: {
    fontFamily: 'Merienda-Bold',
  }
});
