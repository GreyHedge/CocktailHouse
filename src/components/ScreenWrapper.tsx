import React, {ReactNode} from 'react';
import {SafeAreaView, StatusBar, StatusBarProps, Platform} from 'react-native';
import {Colors, ESpacings} from '@constants';
import {Menu} from './Menu';
import {Box} from './Box';

interface IProps {
  children: ReactNode;
  color?: string;
  hideMenu?: boolean;
}

export const ScreenWrapper: React.FC<IProps & StatusBarProps> = React.memo(({
  children,
  color = Colors.dark,
  hideMenu,
  ...props
}) => {
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: color}}>
        <StatusBar
          barStyle={color === Colors.dark ? 'light-content' : 'dark-content'}
          backgroundColor='transparent'
          translucent
          {...props}
        />
        <Box flex={1} marginTop={Platform.OS === 'ios' ? 0 : ESpacings.s32}>
          {children}
          {!hideMenu && <Menu/>}
        </Box>
      </SafeAreaView>
      <SafeAreaView style={{backgroundColor: color, opacity: 0.4}}/>
    </>
  )
});
