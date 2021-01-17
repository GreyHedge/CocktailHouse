import React from 'react';
import {Text, TextProps} from 'react-native';
import {getTextStyleAndRestProps} from './styleHelpers';
import {IPaddings, IMargins} from '../helpers';

export interface ITypographyProps extends TextProps, IPaddings, IMargins {
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
  center?: boolean;
  right?: boolean;
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

