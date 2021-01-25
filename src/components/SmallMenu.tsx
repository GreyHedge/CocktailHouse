import React from 'react';
import {RoundButton} from './RoundButton';
import {ButtonsMenuBlock} from './ButtonsMenuBlock';

interface IProps {
  onPress: () => void;
}

export const SmallMenu: React.FC<IProps> = ({onPress}) => {
  return (
    <ButtonsMenuBlock>
      <RoundButton
        onPress={onPress}
        icon={"close"}
      />
    </ButtonsMenuBlock>
  )
};
