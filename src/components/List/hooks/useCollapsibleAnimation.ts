import {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle, useDerivedValue,
  useSharedValue
} from 'react-native-reanimated';

export const HEADER_HEIGHT = 150;

export const useCollapsibleAnimation = () => {
  const translationY = useSharedValue(0);
  const OpacityAndScale = useDerivedValue(
    () => interpolate(translationY.value, [0, HEADER_HEIGHT], [1, 0], Extrapolate.CLAMP)
  );
  const style = useAnimatedStyle(() => {
    return {
      opacity: OpacityAndScale.value,
      transform: [
        {
          scale: OpacityAndScale.value,
        },
      ],
      height: interpolate(translationY.value, [0, HEADER_HEIGHT], [HEADER_HEIGHT, 0], Extrapolate.CLAMP),
    };
  });

  const handleScroll = useAnimatedScrollHandler((event) => {
    translationY.value = event.contentOffset.y;
  });

  return {
    style,
    handleScroll,
  }
};
