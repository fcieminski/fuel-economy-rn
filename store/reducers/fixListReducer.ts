import {
  ADD_FIXELEMENT,
  EDIT_FIXELEMENT,
  FixListState,
  FixListTypes,
  REMOVE_FIXELEMENT,
} from '../actions/types';

const initialState: FixListState = {
  fixList: [],
};

const fixListReducer = (state = initialState, action: FixListTypes): FixListState => {
  switch (action.type) {
    case ADD_FIXELEMENT:
      return {
        ...state,
        fixList: state.fixList.concat(action.payload),
      };
    case REMOVE_FIXELEMENT:
      return {
        ...state,
        fixList: state.fixList.filter((fixElement) => fixElement.id !== action.payload),
      };
    case EDIT_FIXELEMENT:
      return {
        ...state,
        fixList: state.fixList.map((fixElement) => {
          if (fixElement.id === action.payload.id) {
            return { ...fixElement, ...action.payload, timestamp: Date.now() };
          }
          return fixElement;
        }),
      };
    default:
      return state;
  }
};

export default fixListReducer;
