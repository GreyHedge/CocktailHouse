import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Header, Glass} from './components';
import {Box, SmallMenu} from '@components';
import {GlassListScreenProps} from '@navigation';
import {allGlasses, Colors, ESpacings, roundButtonsWidth} from '@constants';
import {IGlass, IGlassResponse, mapGlassList} from '@data';
import {useGetArrayData} from '../../hooks';

export const GlassListScreen: React.FC<GlassListScreenProps> = () => {
  const glassList = useGetArrayData<IGlass, IGlassResponse>(allGlasses, mapGlassList);

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
