import { Car } from '../../types/allTypes';
import { ADD_CAR, REMOVE_CAR, CarTypes, INCREASE_CAR_MILEAGE, DECREASE_CAR_MILEAGE } from './types';

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

export const increaseCarMileage = (mileage: number): CarTypes => {
  return {
    type: INCREASE_CAR_MILEAGE,
    payload: mileage,
  };
};

export const decreaseCarMileage = (mileage: number): CarTypes => {
  return {
    type: DECREASE_CAR_MILEAGE,
    payload: mileage,
  };
};
