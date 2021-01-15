import {StyleSheet} from 'react-native';
import {ITypographyProps} from './Typography'

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
    style,
    ...restProps
  } = props;
  const textStyles = [
    styles.regular,
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
    color ? {color} : null,
    padding ? {padding} : null,
    paddingTop ? {paddingTop} : null,
    paddingBottom ? {paddingBottom} : null,
    paddingLeft ? {paddingLeft} : null,
    paddingRight ? {paddingRight} : null,
    paddingVertical ? {paddingVertical} : null,
    paddingHorizontal ? {paddingHorizontal} : null,
    margin ? {margin} : null,
    marginTop ? {marginTop} : null,
    marginBottom ? {marginBottom} : null,
    marginLeft ? {marginLeft} : null,
    marginRight ? {marginRight} : null,
    marginVertical ? {marginVertical} : null,
    marginHorizontal ? {marginHorizontal} : null,
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
    fontFamily: 'Montserrat-Bold',
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
});
