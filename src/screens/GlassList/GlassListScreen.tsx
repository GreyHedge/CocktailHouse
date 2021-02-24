import React from 'react';
import {ListRenderItemInfo,} from 'react-native';
import {Header, Glass} from './components';
import {Loader, List} from '@components';
import {GlassListScreenProps} from '@navigation';
import {allGlasses, Colors, EQueryKeys} from '@constants';
import {IGlass, IGlassResponse, mapGlassList} from '@data';
import {useGetArrayData} from '@hooks';

const keyExtractor = (item: IGlass) => item.glass;

const renderIngredient = (info: ListRenderItemInfo<IGlass>) => {
  return (
    <Glass glass={info.item.glass} />
  )
};

export const GlassListScreen: React.FC<GlassListScreenProps> = React.memo(() => {
  const {data: glassList, isLoading} = useGetArrayData<IGlass, IGlassResponse>(
    EQueryKeys.ALL_GLASSES,
    allGlasses,
    mapGlassList,
    true,
  );

  return (
    <List
      items={glassList}
      keyExtractor={keyExtractor}
      renderItem={renderIngredient}>
      {isLoading && (
        <Loader color={Colors.ice} />
      )}
      {!!glassList && (
        <Header />
      )}
    </List>
  );
});
