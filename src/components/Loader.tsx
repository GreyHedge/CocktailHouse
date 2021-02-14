import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Box} from './Box';

interface IProps {
  color: string;
}

export const Loader: React.FC<IProps> = ({color}) => {
  return (
    <Box
      alignItems='center'
      justifyContent='center'
      flex={1}>
      <ActivityIndicator color={color} size='large' />
    </Box>
  )
};
