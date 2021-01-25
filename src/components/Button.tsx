import React, {ReactNode} from 'react';
import {Pressable, StyleSheet, Platform, ViewStyle} from 'react-native';
import {Colors} from '@constants';

interface IProps {
  children: ReactNode;
  rippleColor?: string;
  radius?: number
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
}

export const Button: React.FC<IProps> = ({
  children,
  onPress,
  rippleColor = Colors.dark,
  radius,
  style = {},
}) => {
  return (
    <Pressable
      android_ripple={{color: rippleColor, radius: radius ?? undefined}}
      style={Platform.OS === 'ios' ? buttonStyle(style) : style}
      onPress={onPress}>
      {children}
    </Pressable>
  )
};

const styles = StyleSheet.create({
  pressedButton: {
    opacity: 0.5,
  },
  button: {
    opacity: 1,
  },
});

const buttonStyle = (style: ViewStyle | ViewStyle[] | null) => ({pressed} : {pressed:  boolean}) => pressed
  ? [styles.pressedButton, style]
  : [styles.button, style];
