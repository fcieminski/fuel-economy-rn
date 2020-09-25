import { Car, FixElement, Fuelling, Note } from '../../types/allTypes';
export const ADD_FUELING = 'ADD_FUELING';
export const REMOVE_FUELING = 'REMOVE_FUELING';
export const CLEAR_FUELING = 'CLEAR_FUELING';
export const OPEN_MODAL = 'OPEN_MODAL';

export const ADD_CAR = 'ADD_CAR';
export const REMOVE_CAR = 'REMOVE_CAR';

export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

export const ADD_FIXELEMENT = 'ADD_FIXELEMENT';
export const REMOVE_FIXELEMENT = 'REMOVE_FIXELEMENT';
export const EDIT_FIXELEMENT = 'EDIT_FIXELEMENT';

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

export type NoteState = {
  notes: Array<Note>;
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
  payload: Note;
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
  payload: string;
}

interface EditFixListElementAction {
  type: typeof EDIT_FIXELEMENT;
  payload: FixElement;
}

export type FixListTypes =
  | AddFixListElementAction
  | RemoveFixListElementAction
  | EditFixListElementAction;
