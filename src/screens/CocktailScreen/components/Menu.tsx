import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ButtonsMenuBlock, RoundButton} from '@components';

interface IProps {

}

export const Menu: React.FC<IProps> = () => {
  const {goBack, popToTop} = useNavigation();

  const handleClosePress = useCallback(() => {
    goBack();
  }, []);

  const handleHomePress = useCallback(() => {
    popToTop();
  }, [])

  return (
    <ButtonsMenuBlock>
      <RoundButton
        onPress={handleClosePress}
        icon={"close"}
      />
      <RoundButton
        onPress={handleHomePress}
        icon={"home"}
      />
      <RoundButton
        onPress={()=>{console.log('like pressed')}}
        icon={"hearto"}
      />
    </ButtonsMenuBlock>
  )
};
