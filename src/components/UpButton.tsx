import React from 'react';
import {ButtonsMenuBlock} from './ButtonsMenuBlock';
import {RoundButton} from './RoundButton';
import {Colors} from '@constants';

interface IProps {
  onPress: () => void;
}

export const UpButton:React.FC<IProps> = ({onPress}) => {
  return (
    <ButtonsMenuBlock
      bottom
      color={Colors.reddish}>
      <RoundButton
        onPress={onPress}
        icon='arrowup'
      />
    </ButtonsMenuBlock>
  )
};
