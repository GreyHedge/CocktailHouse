import React, {useCallback} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ButtonsMenuBlock, RoundButton} from '@components';
import {CocktailScreenParams, EScreens} from '@navigation';
import {LikeButton} from './LikeButton';

export const Menu: React.FC = () => {
  const {goBack, popToTop} = useNavigation();
  const {name, params} = useRoute<CocktailScreenParams>();

  const handleClosePress = useCallback(() => {
    goBack();
  }, []);

  const handleHomePress = useCallback(() => {
    popToTop();
  }, []);

  return (
    <ButtonsMenuBlock>
      <RoundButton
        onPress={handleClosePress}
        icon="close"
      />
      <RoundButton
        onPress={handleHomePress}
        icon="home"
      />
      {name === EScreens.COCKTAIL_SCREEN && (
        <LikeButton id={params.id} />
      )}
    </ButtonsMenuBlock>
  )
};
