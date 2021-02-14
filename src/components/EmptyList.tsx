import React from 'react';
import {Image} from 'react-native';
import {Box} from './Box';
import {Typography} from './Typography';
import {Colors, ESpacings} from '@constants';
import {width} from '@helpers';

const emptyBlockWidth = width - ESpacings.s32;

export const EmptyList: React.FC = () => {
  return (
    <Box flex={1} width={emptyBlockWidth}>
      <Image
        source={require('../../assets/images/emptyGlasses.png')}
        style={{width: emptyBlockWidth, height: 300}}
        resizeMode='contain'
      />
      <Typography h1 center color={Colors.ice}>
        Oops! Seems like we have nothing here...
      </Typography>
    </Box>
  );
};
