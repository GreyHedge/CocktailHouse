import React from 'react';
import {ButtonsMenuBlock, RoundButton} from '@components';

export const Menu: React.FC = () => {
  return (
    <ButtonsMenuBlock>
      <RoundButton
        onPress={()=>{console.log('close pressed')}}
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
