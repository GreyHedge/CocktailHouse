import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import {ListHeader} from './ListHeader';
import {EmptyList} from '../EmptyList';
import {UpButton} from '../UpButton';
import {useScrollToTop} from './hooks/useScrollToTop';
import {useCollapsibleAnimation, HEADER_HEIGHT} from './hooks/useCollapsibleAnimation';
import {Colors, ESpacings} from '@constants';
import {IListProps} from './List';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export const ListWithAnimatedTitle: React.FC<Omit<IListProps, 'children'>> = React.memo(({
  items,
  renderItem,
  keyExtractor,
  title,
  background = Colors.dark,
  numColumns= 1,
  minItemsNumber= 5,
}) => {
  const {listRef, handleUpPress} = useScrollToTop();
  const {handleScroll, style} = useCollapsibleAnimation();

  if (!items) {
    return null;
  }

  return (
    <>
      <Animated.View style={[styles.header, style]}>
        <ListHeader background={background} title={title}/>
      </Animated.View>
      <AnimatedFlatList
        ref={listRef}
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        ListEmptyComponent={EmptyList}
        numColumns={numColumns}
        scrollEventThrottle={16}
        onScroll={handleScroll}
      />
      {items.length > minItemsNumber && (
        <UpButton onPress={handleUpPress} />
      )}
    </>
  )
});

const styles = StyleSheet.create({
  container: {
    marginHorizontal: ESpacings.s16,
    paddingBottom: ESpacings.s32,
    paddingTop: HEADER_HEIGHT,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: HEADER_HEIGHT,
    justifyContent: 'center',
  },
});
