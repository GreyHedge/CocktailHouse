import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, ButtonsMenuBlock, EIconType, Icon, RoundButton, Typography} from '@components';
import {Colors, ESpacings} from '@constants';

interface IProps {
  onListPress: () => void;
}

export const Header: React.FC<IProps> = React.memo(({onListPress}) => {
  return (
    <Box>
      <Icon
        name='cocktail'
        type={EIconType.FONTISTO}
        color={Colors.pink}
        size={80}
        style={styles.icon}
      />
      <Typography
        title
        marginTop={ESpacings.s16}
        marginLeft={ESpacings.s16}
        color={Colors.dark}>
        Cocktail
      </Typography>
      <Typography
        title
        marginLeft={ESpacings.s16}
        color={Colors.dark}>
        House
      </Typography>
      <ButtonsMenuBlock
        style={styles.bookmarks}
        color={Colors.pink}>
        <RoundButton
          onPress={onListPress}
          iconType={EIconType.MATERIAL}
          icon='table-heart'
        />
      </ButtonsMenuBlock>
    </Box>
  )
});

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 10,
    left: 100,
    opacity: 0.7,
  },
  bookmarks: {
    top: 10,
  },
});
