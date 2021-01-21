import React, {ReactNode} from 'react';
import {View, ViewStyle, ViewProps} from 'react-native';
import {IPaddings, IMargins} from '../helpers';
import {getStyleAndRestProps} from './styleHelpers';
import {ERounding} from '@constants';

export interface IBoxProps extends ViewProps, IPaddings, IMargins {
  children?: ReactNode | ReactNode[] | null;
  flex?: number;
  width?: number | string;
  height?: number | string;
  row?: boolean;
  justifyContent?: string;
  alignItems?: string;
  backgroundColor?: string;
  borderRadius?: ERounding | number;
  borderTopLeftRadius?: ERounding | number;
  borderTopRightRadius?: ERounding | number;
  borderBottomLeftRadius?: ERounding | number;
  borderBottomRightRadius?: ERounding | number;
  style?: ViewStyle;
}

export const Box: React.FC<IBoxProps> = ({
  children,
  ...props
}) => {
  const {boxStyle, restProps} = getStyleAndRestProps(props);

  return <View style={boxStyle} {...restProps}>{children}</View>
};

