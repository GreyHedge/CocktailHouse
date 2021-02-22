import React, {useCallback, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
  runOnJS,
} from 'react-native-reanimated'
import {Box} from './Box';
import {Icon} from './Icon';
import {Button} from './Button';
import {useFavoriteStorage} from '@hooks';
import {Colors, ESpacings, roundButtonsWidth} from '@constants';

interface IProps {
  id: string;
}

enum EState {
  DEFAULT = 0,
  FAVORITE = 1,
}

const timeConfig = {duration: 100};
const springConfig = {
  stiffness: 1500,
  velocity: 70,
  damping: 50,
  mass: 0.8,
};

export const LikeButton: React.FC<IProps> = ({
  id,
}) => {
  const favoriteStorage = useFavoriteStorage();
  const [isFavorite, setIsFavorite] = useState<boolean>(favoriteStorage.hasItem(id));
  const favoriteRef = useRef<boolean>(isFavorite);
  const scale = useSharedValue(isFavorite ? EState.FAVORITE : EState.DEFAULT);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    }
  });

  const handleSaveOrUnsave = useCallback(() => {
    if (favoriteRef.current) {
      favoriteStorage.removeItem(id);
    } else {
      favoriteStorage.setItem(id);
    }
    setIsFavorite((isFavorite: boolean) => !isFavorite);
    favoriteRef.current = !favoriteRef.current;
  }, [id]);

  const afterAnimationCallback = useCallback(
    (isFinished: boolean) => {
      'worklet'
      if (isFinished) {
        runOnJS(handleSaveOrUnsave)()
      }
    },
    [],
  );

  const handleHeartPress = useCallback(() => {
    if (scale.value === EState.FAVORITE) {
      scale.value = withTiming(
        EState.DEFAULT,
        timeConfig,
        afterAnimationCallback,
      )
    } else {
      scale.value = withSpring(
        EState.FAVORITE,
        springConfig,
        afterAnimationCallback,
      )
    }
  }, []);

  return (
    <Button
      radius={roundButtonsWidth / 2}
      onPress={handleHeartPress}>
      <Box
        width={roundButtonsWidth}
        height={roundButtonsWidth}
        borderRadius={roundButtonsWidth / 2}
        alignItems="center"
        justifyContent="center">
        <Icon
          name='hearto'
          color={Colors.dark}
          size={roundButtonsWidth / 2 - ESpacings.s4}
        />
      </Box>
      <Animated.View style={[styles.heartFull, animatedStyle]}>
        <Icon
          name='heart'
          color={Colors.dark}
          size={roundButtonsWidth / 2 - ESpacings.s4}
        />
      </Animated.View>
    </Button>
  )
};

const styles = StyleSheet.create({
  heartFull: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: roundButtonsWidth,
    height: roundButtonsWidth,
    borderRadius: roundButtonsWidth / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
