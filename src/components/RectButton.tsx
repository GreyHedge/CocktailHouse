import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import {Button} from './Button';
import {Box} from './Box';
import {Icon} from './Icon';
import {Typography} from './Typography';
import {Colors, ERounding, ESpacings} from '@constants';
import {IMargins} from './helpers';
import {commonStyles} from '@helpers';

interface IProps extends IMargins {
  text: string;
  onPress: () => void;
  bigText?: boolean;
  border?: boolean;
  icon?: string;
  style?: ViewStyle;
  textColor?: string;
  rippleColor?: string;
  backgroundColor?: string;
}

export const RectButton: React.FC<IProps> = React.memo(({
  text,
  bigText,
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
            h2
            h3={!bigText}
            semibold
            color={textColor}
            marginVertical={ESpacings.s8}>
            {text}
          </Typography>
          {!!icon && (
            <Icon
              name={icon}
              style={{marginLeft: ESpacings.s8}}
            />
          )}
        </Box>
      </Button>
    </Box>
  )
});

const styles = StyleSheet.create({
  borderRadius: {
    borderRadius: ERounding.r8,
  },
  border: {
    borderColor: Colors.dark,
    borderWidth: 1,
  },
});
