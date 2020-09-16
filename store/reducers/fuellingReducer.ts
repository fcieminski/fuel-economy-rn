import { ADD_FUELING, OPEN_MODAL, FuellingTypes, Fuelling, FuellingState } from '../actions/types';

const initialState: FuellingState = {
  fuellingList: [],
  modal: false,
};

const fuellingReducer = (state = initialState, action: FuellingTypes): FuellingState => {
  switch (action.type) {
    case ADD_FUELING:
      return {
        ...state,
        fuellingList: [...state.fuellingList, action.payload],
      };
    case OPEN_MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    default:
      return state;
  }
};

export default fuellingReducer;
