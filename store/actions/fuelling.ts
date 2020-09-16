import { ADD_FUELING, OPEN_MODAL, Fuelling, FuellingTypes } from './types';

export const addFuelling = (fuelling: Fuelling): FuellingTypes => {
  return {
    type: ADD_FUELING,
    payload: fuelling,
  };
};

export const openModal = (visible: boolean): FuellingTypes => {
  return {
    type: OPEN_MODAL,
    payload: visible,
  };
};
