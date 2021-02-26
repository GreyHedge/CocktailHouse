import React from 'react';
import {Typography} from '@components';
import {Colors, ESpacings, roundButtonsWidth} from '@constants';

interface IProps {
  title?: string;
  background: string;
}

export const ListHeader: React.FC<IProps> = ({title, background}) => {
  if (!title) {
    return null;
  }

  return (
    <Typography
      title
      color={background === Colors.dark ? Colors.ice : Colors.dark}
      marginLeft={ESpacings.s16}
      marginRight={roundButtonsWidth + ESpacings.s16}>
      {title}
    </Typography>
  )
};
