import React from 'react';
import {Box, Typography} from '../../../components';
import {Colors, ERounding, ESpacings} from '../../../constants';

interface IProps {
  instructions: string;
  glass: string;
}

export const Instructions: React.FC<IProps> = ({instructions, glass}) => {
  return (
    <Box>
      <Box
        backgroundColor={Colors.dark}
        width="80%"
        paddingTop={100}
        marginTop={-80}
        paddingBottom={ESpacings.s32}
        marginBottom={ESpacings.s16}
        paddingHorizontal={ESpacings.s16}
        borderBottomRightRadius={ERounding.r32}>
        <Typography
          h2
          center
          color={Colors.ice}
          marginVertical={ESpacings.s16}>
          Instructions
        </Typography>
        <Typography body color={Colors.ice}>
          {instructions}
        </Typography>
        <Typography
          h2
          center
          color={Colors.ice}
          marginVertical={ESpacings.s16}>
          Glass
        </Typography>
        <Typography
          body
          color={Colors.ice}>
          {glass}
        </Typography>
      </Box>
    </Box>
  )
};
