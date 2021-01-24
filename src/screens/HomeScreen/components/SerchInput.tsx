import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Box, MenuButton} from '@components';
import {Colors, ERounding, ESpacings} from '@constants';

interface IProps {
  text: string;
  onTextChange: (text: string) => void;
  onSubmit: () => void;
}

export const SearchInput: React.FC<IProps> = ({
  text,
  onTextChange,
  onSubmit,
}) => {
  return (
    <Box
      row
      margin={ESpacings.s16}
      borderRadius={ERounding.r24}
      backgroundColor={Colors.ice}>
      <TextInput
        value={text}
        onChangeText={onTextChange}
        placeholder="Search for a cocktail..."
        style={styles.input}
        onSubmitEditing={onSubmit}
      />
      <MenuButton onPress={onSubmit} icon="search1" />
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
