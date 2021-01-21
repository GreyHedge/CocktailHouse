import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {Button} from './Button';
import {Box} from './Box';
import {Colors, ESpacings} from '@constants';

interface IProps {
  onPress: () => void;
  icon: string;
  size?: number;
  iconColor?: string;
}

export const MenuButton: React.FC<IProps> =({
  onPress,
  icon,
  size = 50,
  iconColor = Colors.dark,
}) => {
  return (
    <Button radius={size / 2} onPress={onPress}>
      <Box
        width={size}
        height={size}
        borderRadius={size / 2}
        alignItems="center"
        justifyContent="center">
        <Icon
          name={icon}
          color={iconColor}
          size={size / 2 - ESpacings.s4}
        />
      </Box>
    </Button>
  )
};
