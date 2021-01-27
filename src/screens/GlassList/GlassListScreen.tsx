import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';
import {Header, Glass} from './conponents';
import {Box, SmallMenu} from '@components';
import {GlassListScreenProps} from '@navigation';
import {Colors, ESpacings, roundButtonsWidth} from '@constants';
import {IGlass, mapGlassList} from '@data';

export const GlassListScreen: React.FC<GlassListScreenProps> = () => {
  const [glassList, setGlassList] = useState<IGlass[] | null>(null);

  useEffect(() => {
    async function getGlassList() {
      try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list');
        setGlassList(mapGlassList(response.data.drinks));
      } catch (error) {
        console.error(error);
      }
    }
    getGlassList();
  }, []);

  if (!glassList) {
    return null;
  }

  return (
    <Box
      backgroundColor={Colors.dark}
      flex={1}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        {glassList.map(({glass}) => {
          return (
            <Glass
              key={glass}
              glass={glass}
            />
          )
        })}
      </ScrollView>
      <SmallMenu />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: ESpacings.s16,
    paddingRight: roundButtonsWidth + ESpacings.s16,
    paddingBottom: ESpacings.s32,
  }
});
