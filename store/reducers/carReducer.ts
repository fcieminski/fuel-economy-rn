import { REMOVE_CAR, ADD_CAR, CarTypes, CarState } from '../actions/types';

const initialState: CarState = {
  car: null,
};

const carReducer = (state = initialState, action: CarTypes): CarState => {
  switch (action.type) {
    case ADD_CAR:
      return {
        car: action.payload,
      };
    case REMOVE_CAR:
      return {
        car: null,
      };
    default:
      return state;
  }
};

export default carReducer;
