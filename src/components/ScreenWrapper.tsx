import React, {ReactNode} from 'react';
import {SafeAreaView, StatusBar, StatusBarProps} from 'react-native';
import {Colors} from '@constants';
import {Menu} from './Menu';
import {Box} from './Box';

interface IProps {
  children: ReactNode;
  color: string;
  hideMenu?: boolean;
}

export const ScreenWrapper: React.FC<IProps & StatusBarProps> = ({
  children,
  color,
  hideMenu,
  ...props
}) => {
  return (
    <>
      <StatusBar
        barStyle={color === Colors.dark ? 'light-content' : 'dark-content'}
        backgroundColor={color}
        {...props}
      />
      <SafeAreaView style={{flex: 1, backgroundColor: color}}>
        <Box flex={1}>
          {children}
          {!hideMenu && <Menu/>}
        </Box>
      </SafeAreaView>
      <SafeAreaView style={{backgroundColor: color, opacity: 0.4}}/>
    </>
  )
};
