import React from 'react';
import { Car } from '../types/allTypes';
import FuellingHistory from './Fuelling/FuellingHistory';
import CarInfo from './CarData/CarInfo';

interface Props {
  car: Car;
}

const MainScreenInformations: React.FC<Props> = ({ car }) => {
  return (
    <>
      <CarInfo car={car} />
      <FuellingHistory />
    </>
  );
};

export default MainScreenInformations;
