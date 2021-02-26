import {MutableRefObject, useCallback, useRef} from 'react';
import {FlatList} from 'react-native';

type IScrollToTopObj = {
  listRef: MutableRefObject<FlatList | null>;
  handleUpPress: ()  => void;
}

export const useScrollToTop = (): IScrollToTopObj => {
  const listRef = useRef<FlatList>(null);
  const handleUpPress = useCallback(() => {
    listRef.current?.scrollToOffset({offset: 0, animated: true})
  }, []);

  return {
    listRef,
    handleUpPress,
  }
};
