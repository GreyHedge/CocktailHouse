import React, {ReactNode} from 'react';
import {ListRenderItem} from 'react-native';
import {ListWithAnimatedTitle} from './ListWithAnimatedTitle';
import {ScreenWrapper} from '../ScreenWrapper';

 export interface IListProps {
  children?: ReactNode
  items: any[] | undefined | null;
  renderItem: ListRenderItem<any> | null | undefined;
  keyExtractor:(item: any, index: number) => string;
  title?: string;
  background?: string;
  minItemsNumber?: string;
  numColumns?: number;
}

export const List: React.FC<IListProps> = React.memo(({
  children,
  background,
  ...props
}) => {
  return (
    <ScreenWrapper color={background}>
      {children}
      <ListWithAnimatedTitle
        background={background}
        {...props}
      />
    </ScreenWrapper>
  )
});
