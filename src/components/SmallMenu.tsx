import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RoundButton} from './RoundButton';
import {ButtonsMenuBlock} from './ButtonsMenuBlock';

export const SmallMenu: React.FC = () => {
  const {goBack} = useNavigation();
  const handlePress = useCallback(() => {
    goBack()
  }, []);

  return (
    <ButtonsMenuBlock>
      <RoundButton
        onPress={handlePress}
        icon={"close"}
      />
    </ButtonsMenuBlock>
  )
};
