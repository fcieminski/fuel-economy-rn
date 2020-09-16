import { Fuelling } from '../../types/fuellingHistoryTypes';
export const ADD_FUELING = 'ADD_FUELING';
export const REMOVE_FUELING = 'REMOVE_FUELING';
export const OPEN_MODAL = 'OPEN_MODAL';

export type FuellingState = {
  fuellingList: Array<Fuelling>;
  modal: boolean;
};

interface AddFuellingAction {
  type: typeof ADD_FUELING;
  payload: Fuelling;
}
interface RemoveFuellingAction {
  type: typeof REMOVE_FUELING;
  payload: number;
}

interface OpenModal {
  type: typeof OPEN_MODAL;
  payload: boolean;
}

export type FuellingTypes = AddFuellingAction | OpenModal | RemoveFuellingAction;
