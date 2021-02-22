import React from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export enum EIconType {
  ANT = 'AntDesign',
  MATERIAL = 'MaterialCommunityIcons',
}

interface IProps {
  name: string;
  type?: EIconType;
  color: string;
  size: number;
}

export const Icon: React.FC<IProps> = ({
  name,
  color,
  size,
  type = EIconType.ANT,
}) => {
  const Icon = type === EIconType.ANT ? AntDesignIcon : MaterialCommunityIcon;

  return (
    <Icon
      name={name}
      color={color}
      size={size}
    />
  )
};
