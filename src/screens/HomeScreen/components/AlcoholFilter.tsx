import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from '@components';
import {IAlcoholFilter} from '@data';
import {Colors, ESpacings} from '@constants';
import {EScreens} from "@navigation";

interface IProps {
  filter: IAlcoholFilter;
}

export const AlcoholFilter:React.FC<IProps> = ({filter}) => {
  const {name} = filter;
  const {navigate} = useNavigation();

  const handlePress = (name: string) => () => {
    navigate(EScreens.COCKTAIL_LIST_SCREEN, {
      queryString: name.toLowerCase(),
      filter: name.toLowerCase(),
      title: `${name} cocktails`,
    })
  };

  return (
    <RectButton
      border
      key={name}
      text={name}
      bigText
      textColor={Colors.ice}
      rippleColor={Colors.ice}
      onPress={handlePress(name)}
      marginBottom={ESpacings.s8}
      marginRight={ESpacings.s8}
    />
  )
};
