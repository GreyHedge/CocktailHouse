import React from 'react';
import {ButtonsMenuBlock, MenuButton} from '@components';

export const Menu: React.FC = () => {
  return (
    <ButtonsMenuBlock>
      <MenuButton
        onPress={()=>{}}
        icon={"close"}
      />
      <MenuButton
        onPress={()=>{}}
        icon={"home"}
      />
      <MenuButton
        onPress={()=>{}}
        icon={"hearto"}
      />
    </ButtonsMenuBlock>
  )
};
