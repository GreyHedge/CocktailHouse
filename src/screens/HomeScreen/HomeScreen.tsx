import React, {useCallback, useState, useRef} from 'react';
import {ScrollView} from 'react-native';
import {Box} from '@components';
import {Categories, Ingredients, LetterSearch, RandomCocktail, RowButton, SearchInput,} from './components';
import {Colors, ESpacings} from '@constants';

export const HomeScreen: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [isLettersBoxOpen, setIsLettersBoxOpen] = useState<boolean>(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleFindByLetterPress = useCallback(() => {
    setIsLettersBoxOpen((prev) => !prev);
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({duration: 500});
    }, 0);
  }, []);

  return (
    <Box
      backgroundColor={Colors.blue}
      flex={1}>
      <SearchInput
        text={searchText}
        onTextChange={setSearchText}
        onSubmit={() => {console.log('search text is', searchText)}}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}>
        <RandomCocktail />
        <Ingredients />
        <Categories />
        <RowButton
          name="Glass"
          onPress={() => {console.log('find by glass pressed')}}
          />
        <RowButton
          name="Alcohol"
          onPress={() => {console.log('find all alcohol cocktails pressed')}}
        />
        <RowButton
          name="No alcohol"
          onPress={() => {console.log('find all non-alcohol cocktails pressed')}}
        />
        <Box marginBottom={ESpacings.s32}>
          <RowButton
            name="Find by letter"
            icon={isLettersBoxOpen ? 'up-square-o' : 'down-square-o'}
            onPress={handleFindByLetterPress}
            isBorderHidden
          />
          {isLettersBoxOpen && <LetterSearch />}
        </Box>
      </ScrollView>
    </Box>
  )
};
