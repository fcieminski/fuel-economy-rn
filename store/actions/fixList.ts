import { FixElement } from '../../types/allTypes';
import {
  ADD_FIXELEMENT,
  REMOVE_FIXELEMENT,
  UPDATE_FIXELEMENT,
  FixListTypes,
  DECREASE_FIXELEMENT_DISTANCE,
  INCREASE_FIXELEMENT_DISTANCE,
} from './types';

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

export const decreaseFixListElementDistance = (fixList: FixElement[]): FixListTypes => {
  return {
    type: DECREASE_FIXELEMENT_DISTANCE,
    payload: fixList,
  };
};

export const increaseFixListElementDistance = (fixList: FixElement[]): FixListTypes => {
  return {
    type: INCREASE_FIXELEMENT_DISTANCE,
    payload: fixList,
  };
};
