import React from 'react';
import {AccordionButton} from './AccordionButton';
import {Letter} from './Letter';
import {alphabet} from '@constants';

interface IProps {
  afterToggle: () => void;
}

export const LetterSearch: React.FC<IProps> = React.memo(({afterToggle}) => {
  return (
    <AccordionButton
      title="Find by letter"
      afterToggle={afterToggle}>
      {alphabet.map((letter) => {
        return <Letter key={letter} letter={letter} />
      })}
    </AccordionButton>
  )
});
