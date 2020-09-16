import { ADD_FUELING, OPEN_MODAL, Fueling, FuelingTypes } from './types';

export const addFueling = (fueling: Fueling): FuelingTypes => {
  return {
    type: ADD_FUELING,
    payload: fueling,
  };
};

export const openModal = (visible: boolean): FuelingTypes => {
  return {
    type: OPEN_MODAL,
    payload: visible,
  };
};
