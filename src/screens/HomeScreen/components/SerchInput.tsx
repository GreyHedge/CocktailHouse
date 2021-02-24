import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Box, RoundButton} from '@components';
import {Colors, ERounding, ESpacings} from '@constants';
import {commonStyles} from "@helpers";

interface IProps {
  text: string;
  onTextChange: (text: string) => void;
  onSubmit: () => void;
}

export const SearchInput: React.FC<IProps> = React.memo(({
  text,
  onTextChange,
  onSubmit,
}) => {
  return (
    <Box
      row
      margin={ESpacings.s16}
      borderRadius={ERounding.r24}
      backgroundColor={Colors.ice}
      style={[commonStyles.shadowRight, styles.container]}>
      <TextInput
        value={text}
        onChangeText={onTextChange}
        placeholder="Search for a cocktail..."
        style={styles.input}
        onSubmitEditing={onSubmit}
      />
      <RoundButton onPress={onSubmit} icon="search1" />
    </Box>
  )
});

const styles = StyleSheet.create({
  container: {
    elevation: 10,
  },
  input: {
    flex: 1,
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    color: Colors.dark,
    paddingLeft: ESpacings.s16,
  },
});
