import React from 'react';
import {AccordionButton} from './AccordionButton';
import {AlcoholFilter} from './AlcoholFilter';
import {Box} from '@components';
import {IAlcoholFilter, IAlcoholFiltersResponse, mapAlcoholFilters} from '@data';
import {allAlcoholFilters, ESpacings, EQueryKeys} from '@constants';
import {useGetArrayData} from '@hooks';

interface IProps {
  afterToggle: () => void;
}

export const Alcohol:React.FC<IProps> = ({afterToggle}) => {
  const {data: alcoholFilters} = useGetArrayData<IAlcoholFilter, IAlcoholFiltersResponse>(
    EQueryKeys.ALL_ALCOHOL_FILTERS,
    allAlcoholFilters,
    mapAlcoholFilters,
  );

  if (!alcoholFilters) {
    return null;
  }

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
