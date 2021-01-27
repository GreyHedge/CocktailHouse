import React, {ReactNode, useCallback, useState} from 'react';
import {StyleSheet} from 'react-native';
import {RowButton} from './RowButton';
import {Box} from '@components';
import {Colors, ESpacings} from '@constants';

interface IProps {
  title: string;
  children: ReactNode;
  afterToggle: () => void;
  border?: boolean;
}

export const AccordionButton: React.FC<IProps> = ({
  title,
  children,
  afterToggle,
  border,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handlePress = useCallback(() => {
    setIsOpen((prev) => !prev);
    afterToggle();
  }, [afterToggle]);

  return (
    <>
      <RowButton
        name={title}
        icon={isOpen ? 'up-square-o' : 'down-square-o'}
        onPress={handlePress}
        border={border ? !isOpen : false}
      />
      {isOpen && (
        <Box
          row
          justifyContent="center"
          backgroundColor={Colors.dark}
          paddingHorizontal={ESpacings.s16}
          style={styles.container}>
          {children}
        </Box>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    borderTopWidth: 1,
    borderTopColor: Colors.dark,
  },
});
