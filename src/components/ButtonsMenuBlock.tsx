import React, {ReactNode} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import {Box} from './Box';
import {Colors, ESpacings, roundButtonsWidth} from '@constants';
import {commonStyles} from '@helpers';

interface IProps {
  children: ReactNode;
  color?: string;
  bottom?: boolean;
  style?: ViewStyle;
}

export const ButtonsMenuBlock: React.FC<IProps> = ({
  children,
  color = Colors.blue,
  bottom,
  style = null,
}) => {
  return (
    <Box
      backgroundColor={color}
      width={roundButtonsWidth}
      paddingVertical={ESpacings.s16}
      borderBottomLeftRadius={roundButtonsWidth / 2}
      borderTopLeftRadius={roundButtonsWidth / 2}
      alignItems="center"
      style={[styles.container, bottom ? styles.bottom : styles.top, commonStyles.shadowLeft, style]}>
      {children}
    </Box>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    elevation: 10,
  },
  top: {
    top: 50,
  },
  bottom: {
    bottom: 50,
  }
});
