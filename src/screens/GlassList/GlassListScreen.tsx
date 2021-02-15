import React, {useCallback, useRef} from 'react';
import {StyleSheet, ScrollView,} from 'react-native';
import {Header, Glass} from './components';
import {ScreenWrapper, Loader, UpButton} from '@components';
import {GlassListScreenProps} from '@navigation';
import {allGlasses, Colors, ESpacings, roundButtonsWidth, EQueryKeys} from '@constants';
import {IGlass, IGlassResponse, mapGlassList} from '@data';
import {useGetArrayData} from '@hooks';

export const GlassListScreen: React.FC<GlassListScreenProps> = () => {
  const {data: glassList, isLoading} = useGetArrayData<IGlass, IGlassResponse>(
    EQueryKeys.ALL_GLASSES,
    allGlasses,
    mapGlassList,
    true,
  );
  const listRef = useRef<ScrollView>(null);

  const handleUpPress = useCallback(() => {
    listRef.current?.scrollTo();
  }, []);

  if (!glassList) {
    return null;
  }

  return (
    <ScreenWrapper color={Colors.dark}>
      {isLoading && (
        <Loader color={Colors.ice} />
      )}
      <Header />
      <ScrollView
        ref={listRef}
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
      <UpButton onPress={handleUpPress} />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: ESpacings.s16,
    paddingRight: roundButtonsWidth + ESpacings.s16,
    paddingBottom: ESpacings.s32,
  }
});
