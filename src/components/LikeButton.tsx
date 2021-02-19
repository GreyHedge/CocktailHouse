import React, {useCallback, useState} from 'react';
import {RoundButton} from './RoundButton';
import {useFavoriteStorage} from '@hooks';

interface IProps {
  id: string;
}

export const LikeButton: React.FC<IProps> = ({
  id,
}) => {
  const favoriteStorage = useFavoriteStorage();
  const [isFavorite, setIsFavorite] = useState<boolean>(favoriteStorage.hasItem(id));

  const handleHeartPress = useCallback(() => {
    if (isFavorite) {
      favoriteStorage.removeItem(id);
    } else {
      favoriteStorage.setItem(id);
    }
    setIsFavorite((isFavorite: boolean) => !isFavorite);
  }, [id]);

  return (
    <RoundButton
      icon={isFavorite ? 'heart' : 'hearto'}
      onPress={handleHeartPress}
    />
  )
};
