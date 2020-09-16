import { ADD_FUELING, OPEN_MODAL, Fuelling, FuellingTypes, REMOVE_FUELING } from './types';

export const addFuelling = (fuelling: Fuelling): FuellingTypes => {
  return {
    type: ADD_FUELING,
    payload: fuelling,
  };
};

export const removeFuelling = (index: number): FuellingTypes => {
  return {
    type: REMOVE_FUELING,
    payload: index,
  };
};

export const openModal = (visible: boolean): FuellingTypes => {
  return {
    type: OPEN_MODAL,
    payload: visible,
  };
};
