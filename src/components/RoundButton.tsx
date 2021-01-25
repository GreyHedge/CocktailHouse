import React from 'react';
import {ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Button} from './Button';
import {Box} from './Box';
import {Colors, ESpacings, roundButtonsWidth} from '@constants';
import {Typography} from "./Typography";

interface IProps {
  onPress: () => void;
  text?: string;
  icon?: string;
  size?: number;
  color?: string;
  rippleColor?: string;
  style?: ViewStyle;
}

export const RoundButton: React.FC<IProps> =({
  onPress,
  text,
  icon,
  size = roundButtonsWidth,
  color = Colors.dark,
  rippleColor = Colors.dark,
  style,
}) => {
  return (
    <Button
      radius={size / 2}
      onPress={onPress}
      rippleColor={rippleColor}>
      <Box
        width={size}
        height={size}
        borderRadius={size / 2}
        alignItems="center"
        justifyContent="center"
        style={style}>
        {!!icon && (
          <Icon
            name={icon}
            color={color}
            size={size / 2 - ESpacings.s4}
          />
        )}
        {!!text && (
          <Typography
            h2
            center
            color={color}>
            {text}
          </Typography>
        )}
      </Box>
    </Button>
  )
};
