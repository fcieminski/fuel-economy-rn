export const ADD_FUELING = 'ADD_FUELING';

export type FuellingState = {
  fuellingList: Array<Fuelling>;
  modal: boolean;
};

export type Fuelling = {
  distance: number;
  cost: number;
  fuelAmount: number;
  date: number;
};

interface AddFuellingAction {
  type: typeof ADD_FUELING;
  payload: Fuelling;
}

export const OPEN_MODAL = 'OPEN_MODAL';

interface OpenModal {
  type: typeof OPEN_MODAL;
  payload: boolean;
}

export type FuellingTypes = AddFuellingAction | OpenModal;
