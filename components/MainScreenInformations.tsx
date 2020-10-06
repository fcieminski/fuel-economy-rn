import React from 'react';
import { Car } from '../types/allTypes';
import CarFuellingHistory from './CarFuellingHistory';
import CarInfo from './CarInfo';

type Props = {
  car: Car;
};

const MainScreenInformations: React.FC<Props> = ({ car }) => {
  return (
    <>
      <CarInfo car={car} />
      <CarFuellingHistory />
    </>
  );
};

export default MainScreenInformations;
