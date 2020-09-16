import { ADD_FUELING, OPEN_MODAL, FuelingTypes, Fueling, FuelingState } from '../actions/types';

const initialState: FuelingState = {
  fuelingList: [],
  modal: false,
};

const fuelingReducer = (state = initialState, action: FuelingTypes): FuelingState => {
  switch (action.type) {
    case ADD_FUELING:
      return {
        ...state,
        fuelingList: [...state.fuelingList, action.payload],
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

export default fuelingReducer;
