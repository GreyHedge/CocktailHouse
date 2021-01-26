import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Button} from './Button';
import {Box} from './Box';
import {Typography} from './Typography';
import {Colors, ERounding, ESpacings} from '@constants';
import {IMargins} from './helpers';
import {commonStyles} from '@helpers';

interface IProps extends IMargins {
  text: string;
  onPress: () => void;
  border?: boolean;
  icon?: string;
  style?: ViewStyle;
  textColor?: string;
  rippleColor?: string;
  backgroundColor?: string;
}

export const RectButton: React.FC<IProps> = ({
  text,
  icon,
  onPress,
  border = false,
  style = {},
  textColor = Colors.dark,
  rippleColor = Colors.dark,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginHorizontal,
  marginVertical,
}) => {
  return (
    <Box
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginHorizontal={marginHorizontal}
      marginVertical={marginVertical}
      style={[commonStyles.noOverflow, styles.borderRadius]}>
      <Button
        rippleColor={rippleColor}
        onPress={onPress}
        style={[style, styles.borderRadius, border ? styles.border : null]}>
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
  borderRadius: {
    borderRadius: ERounding.r8,
  },
  border: {
    borderColor: Colors.dark,
    borderWidth: 1,
  },
});
