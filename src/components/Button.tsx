import React, {ReactNode} from 'react';
import {Pressable, StyleSheet, Platform} from 'react-native';
import {Colors} from '@constants';

interface IProps {
  children: ReactNode;
  rippleColor?: string;
  radius?: number
  onPress: () => void;
}

export const Button: React.FC<IProps> = ({
  children,
  onPress,
  rippleColor = Colors.dark,
  radius,
}) => {
  return (
    <Pressable
      android_ripple={{color: rippleColor, radius: radius ?? undefined}}
      style={Platform.OS === 'ios' ? buttonStyle : null}
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

const buttonStyle = ({pressed} : {pressed:  boolean}) => pressed ? styles.pressedButton : styles.button;
