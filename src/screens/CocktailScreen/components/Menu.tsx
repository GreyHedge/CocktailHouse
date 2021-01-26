import React from 'react';
import {ButtonsMenuBlock, RoundButton} from '@components';

interface IProps {
  onClosePress: () => void;
}

export const Menu: React.FC<IProps> = ({onClosePress}) => {
  return (
    <ButtonsMenuBlock>
      <RoundButton
        onPress={onClosePress}
        icon={"close"}
      />
      <RoundButton
        onPress={()=>{console.log('home pressed')}}
        icon={"home"}
      />
      <RoundButton
        onPress={()=>{console.log('like pressed')}}
        icon={"hearto"}
      />
    </ButtonsMenuBlock>
  )
};
