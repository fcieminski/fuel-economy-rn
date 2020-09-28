import {
  REMOVE_CAR,
  ADD_CAR,
  CarTypes,
  CarState,
  INCREASE_CAR_MILEAGE,
  DECREASE_CAR_MILEAGE,
} from '../actions/types';

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
    case INCREASE_CAR_MILEAGE:
      return {
        car: {
          ...state.car,
          mileage: state.car.mileage += action.payload,
        },
      };
    case DECREASE_CAR_MILEAGE:
      return {
        car: {
          ...state.car,
          mileage: state.car.mileage -= action.payload,
        },
      };
    default:
      return state;
  }
};

export default carReducer;
