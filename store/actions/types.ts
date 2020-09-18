import { Car, Fuelling } from '../../types/allTypes';
export const ADD_FUELING = 'ADD_FUELING';
export const REMOVE_FUELING = 'REMOVE_FUELING';
export const CLEAR_FUELING = 'CLEAR_FUELING';
export const OPEN_MODAL = 'OPEN_MODAL';

export const ADD_CAR = 'ADD_CAR';
export const REMOVE_CAR = 'REMOVE_CAR';

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
interface ClearFuellingAction {
  type: typeof CLEAR_FUELING;
}

interface OpenModal {
  type: typeof OPEN_MODAL;
  payload: boolean;
}

export type FuellingTypes =
  | AddFuellingAction
  | OpenModal
  | RemoveFuellingAction
  | ClearFuellingAction;

export type CarState = {
  car: Car | null;
};
interface AddCarAction {
  type: typeof ADD_CAR;
  payload: Car;
}

interface RemoveCarAction {
  type: typeof REMOVE_CAR;
}

export type CarTypes = AddCarAction | RemoveCarAction;
