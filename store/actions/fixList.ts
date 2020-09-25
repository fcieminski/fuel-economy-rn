import { FixElement } from '../../types/allTypes';
import { ADD_FIXELEMENT, REMOVE_FIXELEMENT, EDIT_FIXELEMENT, FixListTypes } from './types';

export const addFixListElement = (fixElement: FixElement): FixListTypes => {
  return {
    type: ADD_FIXELEMENT,
    payload: fixElement,
  };
};

export const removeFixListElement = (id: string): FixListTypes => {
  return {
    type: REMOVE_FIXELEMENT,
    payload: id,
  };
};

export const saveEditedFixListElement = (fixElement: FixElement): FixListTypes => {
  return {
    type: EDIT_FIXELEMENT,
    payload: fixElement,
  };
};
