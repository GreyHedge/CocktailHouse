import React from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from '@components';
import {Colors, ESpacings} from '@constants';
import {EScreens} from '@navigation';
import {EFilter} from '@data';

interface IProps {
  category: string;
}

export const Category: React.FC<IProps> = ({category}) => {
  const {navigate} = useNavigation();

  const handlePress = (category: string) => () => {
    navigate(EScreens.COCKTAIL_LIST_SCREEN, {
      queryString: category,
      filter: EFilter.CATEGORY,
      title: category,
    })
  };

  return (
    <RectButton
      border
      text={category}
      textColor={Colors.ice}
      rippleColor={Colors.ice}
      onPress={handlePress(category)}
      style={styles.category}
      marginBottom={ESpacings.s8}
      marginRight={ESpacings.s8}
    />
  )
};

const styles = StyleSheet.create({
  category: {
    backgroundColor: Colors.dark,
  },
});
