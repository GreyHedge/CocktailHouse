import React, {ReactNode, useCallback, useRef} from 'react';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {Typography} from './Typography';
import {EmptyList} from './EmptyList';
import {UpButton} from './UpButton';
import {ScreenWrapper} from './ScreenWrapper';
import {Colors, ESpacings, roundButtonsWidth} from '@constants';

interface IProps {
  children?: ReactNode
  items: any[] | undefined | null;
  renderItem: ListRenderItem<any> | null | undefined;
  keyExtractor:(item: any, index: number) => string;
  title?: string;
  background?: string;
  minItemsNumber?: string;
  numColumns?: number;
}

export const List: React.FC<IProps> = ({
  children,
  items,
  renderItem,
  keyExtractor,
  title,
  background = Colors.dark,
  numColumns= 1,
  minItemsNumber= 5,
}) => {
  const listRef = useRef<FlatList>(null);

  const handleUpPress = useCallback(() => {
    listRef.current?.scrollToOffset({offset: 0, animated: true})
  }, []);

  return (
    <ScreenWrapper color={background}>
      {children}
      {!!items && (
        <>
          {title && (
            <Typography
              title
              color={background === Colors.dark ? Colors.ice : Colors.dark}
              marginVertical={ESpacings.s16}
              marginLeft={ESpacings.s16}
              marginRight={roundButtonsWidth + ESpacings.s16}>
              {title}
            </Typography>
          )}
          <FlatList
            ref={listRef}
            data={items}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
            ListEmptyComponent={EmptyList}
            numColumns={numColumns}
          />
        </>
      )}
      {!!items && items.length > minItemsNumber && (
        <UpButton onPress={handleUpPress} />
      )}
    </ScreenWrapper>
  )
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: ESpacings.s16,
    paddingBottom: ESpacings.s32,
  },
});
