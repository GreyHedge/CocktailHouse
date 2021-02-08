import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from '@components';
import {EScreens} from '@navigation';
import {EFilter} from '@data';
import {Colors, ESpacings} from '@constants';

interface IProps {
  glass: string;
}

export const Glass: React.FC<IProps> = ({
  glass,
}) => {
  const {navigate} = useNavigation();

  const handleGlassPress = useCallback((glass: string) => () => {
    navigate(EScreens.COCKTAIL_LIST_SCREEN, {
      title: glass,
      filter: EFilter.GLASS,
      queryString: glass,
    })
  }, []);

  if (!glass) {
    return null;
  }

  return (
    <RectButton
      border
      text={glass}
      bigText
      textColor={Colors.ice}
      rippleColor={Colors.ice}
      onPress={handleGlassPress(glass)}
      marginBottom={ESpacings.s8}
      marginRight={ESpacings.s8}
    />
  )
};
