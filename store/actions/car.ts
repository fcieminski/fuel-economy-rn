import { Car } from '../../types/allTypes';
import { ADD_CAR, REMOVE_CAR, CarTypes } from './types';

export const addCar = (car: Car): CarTypes => {
  return {
    type: ADD_CAR,
    payload: car,
  };
};

export const removeCar = (): CarTypes => {
  return {
    type: REMOVE_CAR,
  };
};
