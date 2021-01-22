import React from 'react';
import {MenuButton} from './MenuButton';
import {ButtonsMenuBlock} from './ButtonsMenuBlock';

interface IProps {
  onPress: () => void;
}

export const SmallMenu: React.FC<IProps> = ({onPress}) => {
  return (
    <ButtonsMenuBlock>
      <MenuButton
        onPress={onPress}
        icon={"close"}
      />
    </ButtonsMenuBlock>
  )
};
