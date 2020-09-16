export const ADD_FUELING = 'ADD_FUELING';

export type FuelingState = {
  fuelingList: Array<Fueling>;
  modal: boolean;
};

export type Fueling = {
  distance: number;
  cost: number;
  fuelAmount: number;
  date: number;
};

interface AddFuelingAction {
  type: typeof ADD_FUELING;
  payload: Fueling;
}

export const OPEN_MODAL = 'OPEN_MODAL';

interface OpenModal {
  type: typeof OPEN_MODAL;
  payload: boolean;
}

export type FuelingTypes = AddFuelingAction | OpenModal;
