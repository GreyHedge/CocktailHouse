import React from 'react';
import {ButtonsMenuBlock, RoundButton} from '@components';
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
