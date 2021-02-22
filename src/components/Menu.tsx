import React, {useCallback} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {LikeButton} from './LikeButton';
import {ButtonsMenuBlock} from './ButtonsMenuBlock';
import {RoundButton} from './RoundButton';
import {EIconType} from './Icon';
import {CocktailScreenParams, FavoriteListScreenParams, EScreens} from '@navigation';

export const Menu: React.FC = () => {
  const {goBack, popToTop, push} = useNavigation();
  const {name, params} = useRoute<CocktailScreenParams | FavoriteListScreenParams>();

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
      {name === EScreens.COCKTAIL_SCREEN && params?.id && (
        <LikeButton id={params.id} />
      )}
      {name !== EScreens.FAVORITES_LIST_SCREEN && (
        <RoundButton
          onPress={handleListPress}
          iconType={EIconType.MATERIAL}
          icon='table-heart'
        />
      )}
    </ButtonsMenuBlock>
  )
};
