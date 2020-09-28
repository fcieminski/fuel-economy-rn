import { Car, FixElement, Fuelling, Note } from '../../types/allTypes';
export const ADD_FUELING = 'ADD_FUELING';
export const REMOVE_FUELING = 'REMOVE_FUELING';
export const CLEAR_FUELING = 'CLEAR_FUELING';

export const ADD_CAR = 'ADD_CAR';
export const REMOVE_CAR = 'REMOVE_CAR';
export const INCREASE_CAR_MILEAGE = 'INCREASE_CAR_MILEAGE';
export const DECREASE_CAR_MILEAGE = 'DECREASE_CAR_MILEAGE';

export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

export const ADD_FIXELEMENT = 'ADD_FIXELEMENT';
export const REMOVE_FIXELEMENT = 'REMOVE_FIXELEMENT';
export const UPDATE_FIXELEMENT = 'UPDATE_FIXELEMENT';

export type FuellingState = {
  fuellingList: Fuelling[];
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

export type FuellingTypes = AddFuellingAction | RemoveFuellingAction | ClearFuellingAction;

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

interface IncreaseCarMileageActions {
  type: typeof INCREASE_CAR_MILEAGE;
  payload: number;
}

interface DecreaseCarMileageActions {
  type: typeof DECREASE_CAR_MILEAGE;
  payload: number;
}

export type CarTypes =
  | AddCarAction
  | RemoveCarAction
  | IncreaseCarMileageActions
  | DecreaseCarMileageActions;

export type NoteState = {
  notes: Note[];
};

interface AddNoteAction {
  type: typeof ADD_NOTE;
  payload: Note;
}

interface RemoveNoteAction {
  type: typeof REMOVE_NOTE;
  payload: number;
}

interface EditNoteAction {
  type: typeof EDIT_NOTE;
  payload: {
    index: number;
    element: Note;
  };
}

export type NoteTypes = AddNoteAction | RemoveNoteAction | EditNoteAction;

export type FixListState = {
  fixList: FixElement[];
};

interface AddFixListElementAction {
  type: typeof ADD_FIXELEMENT;
  payload: FixElement;
}

interface RemoveFixListElementAction {
  type: typeof REMOVE_FIXELEMENT;
  payload: number;
}

interface UpdateFixListElementAction {
  type: typeof UPDATE_FIXELEMENT;
  payload: {
    index: number;
    element: FixElement;
  };
}

export type FixListTypes =
  | AddFixListElementAction
  | RemoveFixListElementAction
  | UpdateFixListElementAction;
