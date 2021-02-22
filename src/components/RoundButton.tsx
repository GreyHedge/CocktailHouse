import React from 'react';
import {ViewStyle} from 'react-native';
import {Button} from './Button';
import {Box} from './Box';
import {EIconType, Icon} from './Icon';
import {Typography} from './Typography';
import {Colors, ESpacings, roundButtonsWidth} from '@constants';

interface IProps {
  onPress: () => void;
  text?: string;
  icon?: string;
  iconType?: EIconType;
  size?: number;
  color?: string;
  rippleColor?: string;
  style?: ViewStyle;
}

export const RoundButton: React.FC<IProps> =({
  onPress,
  text,
  icon,
  iconType = EIconType.ANT,
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
            type={iconType}
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
