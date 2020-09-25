import {
  ADD_FIXELEMENT,
  UPDATE_FIXELEMENT,
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
        fixList: state.fixList.filter((_, index) => index !== action.payload),
      };
    case UPDATE_FIXELEMENT:
      return {
        ...state,
        fixList: state.fixList.map((fixElement, index) => {
          if (index === action.payload.index) {
            return { ...fixElement, isDone: action.payload.element.isDone, timestamp: Date.now() };
          }
          return fixElement;
        }),
      };
    default:
      return state;
  }
};

export default fixListReducer;
