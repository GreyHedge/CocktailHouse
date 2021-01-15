import * as React from 'react';
import {Text, TextProps} from 'react-native';
import {getTextStyleAndRestProps} from './styleHelper';
import {ESpacings} from '../spacings';

export interface ITypographyProps extends TextProps {
  children: string;
  color?: string;
  title?: boolean;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  headLine?: boolean;
  body?: boolean;
  footnote?: boolean;
  caption?: boolean;
  semibold?: boolean;
  bold?: boolean;
  padding?: ESpacings | number;
  paddingTop?: ESpacings | number;
  paddingBottom?: ESpacings | number;
  paddingLeft?: ESpacings | number;
  paddingRight?: ESpacings | number;
  paddingVertical?: ESpacings | number;
  paddingHorizontal?: ESpacings | number;
  margin?: ESpacings | number;
  marginTop?: ESpacings | number;
  marginBottom?: ESpacings | number;
  marginLeft?: ESpacings | number;
  marginRight?: ESpacings | number;
  marginVertical?: ESpacings | number;
  marginHorizontal?: ESpacings | number;
}

export const Typography: React.FC<ITypographyProps> = ({
  children,
  ...props
}) => {
  const {textStyles, restProps} = getTextStyleAndRestProps(props);

  return (
    <Text style={textStyles} {...restProps}>{children}</Text>
  )
};

