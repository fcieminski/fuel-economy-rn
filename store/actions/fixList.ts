import { FixElement } from '../../types/allTypes';
import { ADD_FIXELEMENT, REMOVE_FIXELEMENT, UPDATE_FIXELEMENT, FixListTypes } from './types';

export const addFixListElement = (fixElement: FixElement): FixListTypes => {
  return {
    type: ADD_FIXELEMENT,
    payload: fixElement,
  };
};

export const removeFixListElement = (index: number): FixListTypes => {
  return {
    type: REMOVE_FIXELEMENT,
    payload: index,
  };
};

export const updateFixListElement = (index: number, element: FixElement): FixListTypes => {
  return {
    type: UPDATE_FIXELEMENT,
    payload: {
      index,
      element,
    },
  };
};
