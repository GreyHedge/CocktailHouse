import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Box} from '@components';
import {LetterSearch, SearchInput, RandomCocktail} from './components';
import {Colors, ESpacings} from '@constants';

export const HomeScreen: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <Box
      backgroundColor={Colors.blue}
      flex={1}>
      <SearchInput
        text={searchText}
        onTextChange={setSearchText}
        onSubmit={() => {console.log('search text is', searchText)}}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <RandomCocktail />
        <LetterSearch />
      </ScrollView>
    </Box>
  )
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    color: Colors.dark,
    paddingLeft: ESpacings.s16,
  },
});
