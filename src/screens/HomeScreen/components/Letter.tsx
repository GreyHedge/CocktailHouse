import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RoundButton} from '@components';
import {Colors} from '@constants';
import {EScreens} from '@navigation';
import {EFilter} from '@data';

interface IProps {
  letter: string;
}

export const Letter: React.FC<IProps> = ({letter}) => {
  const {navigate} = useNavigation();

  const handlePress = (letter: string) => () => {
    navigate(EScreens.COCKTAIL_LIST_SCREEN, {
      queryString: letter,
      filter: EFilter.LETTER,
      title: `Cocktails starts with ${letter}`,
    })
  };

  return (
    <RoundButton
      text={letter}
      color={Colors.ice}
      rippleColor={Colors.ice}
      onPress={handlePress(letter)}
    />
  )
};
