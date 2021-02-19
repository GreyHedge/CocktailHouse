import React, {useCallback} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ButtonsMenuBlock, RoundButton} from '@components';
import {CocktailScreenParams, EScreens} from '@navigation';
import {LikeButton} from './LikeButton';

export const Menu: React.FC = () => {
  const {goBack, popToTop, push} = useNavigation();
  const {name, params} = useRoute<CocktailScreenParams>();

  const handleBackPress = useCallback(() => {
    goBack();
  }, []);

  const handleHomePress = useCallback(() => {
    popToTop();
  }, []);

  const handleListPress = useCallback(() => {
    push(EScreens.FAVORITES_LIST_SCREEN);
  }, []);

  return (
    <ButtonsMenuBlock>
      <RoundButton
        onPress={handleBackPress}
        icon='arrowleft'
      />
      <RoundButton
        onPress={handleHomePress}
        icon='home'
      />
      {name === EScreens.COCKTAIL_SCREEN && (
        <LikeButton id={params.id} />
      )}
      {name !== EScreens.FAVORITES_LIST_SCREEN && (
        <RoundButton
          onPress={handleListPress}
          icon='profile'
        />
      )}
    </ButtonsMenuBlock>
  )
};
