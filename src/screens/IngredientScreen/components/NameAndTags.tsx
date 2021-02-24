import React from 'react';
import {Typography, Box, Icon} from '@components';
import {Colors, ESpacings} from '@constants';

interface IProps {
  name: string;
  type: string | null;
  isAlcohol: boolean;
  abv: string | null;
}

export const NameAndTags: React.FC<IProps> = React.memo(({
  name,
  type,
  isAlcohol,
  abv,
}) => {
  return (
    <Box>
      <Typography
        h1
        color={Colors.dark}
        marginLeft={ESpacings.s16}
        marginVertical={ESpacings.s16}>
        {name}
      </Typography>
      <Box
        row
        marginVertical={ESpacings.s32}
        marginLeft={ESpacings.s16}>
        {(!!type || isAlcohol || !!abv) && (
          <Icon name="tagso" />
        )}
        <Box marginLeft={ESpacings.s16}>
          {!!type && (
            <Typography
              body
              color={Colors.dark}>
              {type}
            </Typography>
          )}
          {isAlcohol && (
            <Typography
              body
              color={Colors.dark}>
              Alcoholic
            </Typography>
          )}
          {!!abv && (
            <Typography
              body
              color={Colors.dark}>
              {`${abv} %`}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  )
});
