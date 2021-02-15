import React, {useCallback, useState, useRef} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {ScreenWrapper} from '@components';
import {
  Header,
  Categories,
  Ingredients,
  LetterSearch,
  RandomCocktails,
  RowButton,
  SearchInput,
  Alcohol,
} from './components';
import {Colors, ESpacings} from '@constants';
import {EScreens, HomeScreenProps} from '@navigation';
import {EFilter} from '@data';

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const textRef = useRef<string>();
  textRef.current = searchText;
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScrollToEnd = useCallback(() => {
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({duration: 500});
    }, 0);
  }, [scrollViewRef.current]);

  const handleGlassPress = useCallback(() => {
    navigation.navigate(EScreens.GLASS_LIST_SCREEN)
  }, [navigation]);

  const handleMoreIngredientsPress = useCallback(() => {
    navigation.navigate(EScreens.INGREDIENT_LIST_SCREEN)
  }, [navigation]);

  const handleSearchSubmit = useCallback(() => {
    if (!textRef.current) {
      return;
    }

    navigation.navigate(EScreens.COCKTAIL_LIST_SCREEN, {
      filter: EFilter.NAME,
      queryString: textRef.current,
    })
  }, [navigation, textRef]);

  return (
    <ScreenWrapper color={Colors.blue} hideMenu>
      <Header />
      <SearchInput
        text={searchText}
        onTextChange={setSearchText}
        onSubmit={handleSearchSubmit}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        ref={scrollViewRef}>
        <RandomCocktails />
        <Ingredients onMorePress={handleMoreIngredientsPress} />
        <Categories />
        <RowButton
          border
          name="Glass"
          onPress={handleGlassPress}
        />
        <Alcohol afterToggle={handleScrollToEnd} />
        <LetterSearch afterToggle={handleScrollToEnd} />
      </ScrollView>
    </ScreenWrapper>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: ESpacings.s32,
  },
});
