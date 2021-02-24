import React from 'react';
import {ViewStyle} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import {Colors, ESpacings} from '@constants';

export enum EIconType {
  ANT = 'AntDesign',
  MATERIAL = 'MaterialCommunityIcons',
  FONTISTO = 'Fontisto',
}

interface IProps {
  name: string;
  type?: EIconType;
  color?: string;
  size?: number;
  style?: ViewStyle;
}

const getIcon = (type: EIconType) => {
  switch (type) {
    case EIconType.ANT:
      return AntDesignIcon;
    case EIconType.MATERIAL:
      return MaterialCommunityIcon;
    case EIconType.FONTISTO:
      return FontistoIcon;
    default:
      throw 'Wrong icon type';
  }
};

export const Icon: React.FC<IProps> = ({
  name,
  color = Colors.dark,
  size = ESpacings.s20,
  type = EIconType.ANT,
  style,
}) => {
  const Icon = getIcon(type);

  return (
    <Icon
      name={name}
      color={color}
      size={size}
      style={style}
    />
  )
};
