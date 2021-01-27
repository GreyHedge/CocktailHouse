import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {AccordionButton} from './AccordionButton';
import {AlcoholFilter} from './AlcoholFilter';
import {Box} from '@components';
import {IAlcoholFilter, mapAlcoholFilters} from '@data';
import {ESpacings} from '@constants';

interface IProps {
  afterToggle: () => void;
}

export const Alcohol:React.FC<IProps> = ({afterToggle}) => {
  const [alcoholFilters, setAlcoholFilters] = useState<IAlcoholFilter[]>([]);

  useEffect(() => {
    async function getAlcoholFilters() {
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list`);
        setAlcoholFilters(mapAlcoholFilters(response.data.drinks));
      } catch (error) {
        console.error(error);
      }
    }
    getAlcoholFilters();
  }, []);

  return (
    <AccordionButton
      border
      title="Alcohol"
      afterToggle={afterToggle}>
      <Box row marginVertical={ESpacings.s16} style={{flexWrap: 'wrap'}}>
        {alcoholFilters.map((filter) => {
          return (
            <AlcoholFilter
              key={filter.name}
              filter={filter}
            />
          )
        })}
      </Box>
    </AccordionButton>
  )
};
