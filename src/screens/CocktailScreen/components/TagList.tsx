import React from 'react';
import {Tag} from './Tag';
import {Box} from '@components';

interface IProps {
  isAlcohol: boolean;
  category: string;
  glass: string;
}

export const TagList: React.FC<IProps> = ({
  isAlcohol,
  category,
  glass,
}) => {
  return (
    <Box>
      <Tag
        name="Contain alcohol"
        value={isAlcohol ? "Yes" : "No"}
      />
      <Tag
        name="Category"
        value={category}
      />
      <Tag
        name="Glass"
        value={glass}
        isLast
      />
    </Box>
  )
};
