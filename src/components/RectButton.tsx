import React from 'react';
import {StyleSheet, ViewStyle, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Button} from './Button';
import {Box} from './Box';
import {Typography} from './Typography';
import {Colors, ERounding, ESpacings} from '@constants';

interface IProps {
  text: string;
  onPress: () => void;
  border?: boolean;
  icon?: string;
  style?: ViewStyle;
  textColor?: string;
  rippleColor?: string;
}

export const RectButton: React.FC<IProps> = ({
  text,
  icon,
  onPress,
  border = false,
  style = {},
  textColor = Colors.dark,
  rippleColor = Colors.dark,
}) => {
  return (
    <Box style={[styles.container, border ? styles.border : null, style]}>
      <Button
        rippleColor={rippleColor}
        onPress={onPress}>
        <Box
          row
          paddingHorizontal={ESpacings.s16}
          justifyContent="center"
          alignItems="center">
          <Typography
            h3
            semibold
            color={textColor}
            marginVertical={ESpacings.s8}>
            {text}
          </Typography>
          {!!icon && (
            <Icon
              name={icon}
              color={Colors.dark}
              size={20}
              style={{marginLeft: ESpacings.s8}}
            />
          )}
        </Box>
      </Button>
    </Box>
  )
};

const styles = StyleSheet.create({
  container: {
    borderRadius: ERounding.r8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  border: {
    borderColor: Colors.dark,
    borderWidth: 1,
  },
});
