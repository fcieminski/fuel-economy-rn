import {
  ADD_FUELING,
  OPEN_MODAL,
  FuellingTypes,
  FuellingState,
  REMOVE_FUELING,
} from '../actions/types';

const initialState: FuellingState = {
  fuellingList: [],
  modal: false,
};

const fuellingReducer = (state = initialState, action: FuellingTypes): FuellingState => {
  switch (action.type) {
    case ADD_FUELING:
      return {
        ...state,
        fuellingList: state.fuellingList.concat(action.payload),
      };
    case OPEN_MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    case REMOVE_FUELING:
      return {
        ...state,
        fuellingList: state.fuellingList.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default fuellingReducer;
