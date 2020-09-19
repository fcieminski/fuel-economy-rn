import { REMOVE_NOTE, ADD_NOTE, NoteTypes, NoteState, EDIT_NOTE } from '../actions/types';

const initialState: NoteState = {
  notes: [],
};

const noteReducer = (state = initialState, action: NoteTypes): NoteState => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: state.notes.concat(action.payload),
      };
    case REMOVE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((_, index) => index !== action.payload),
      };
    case EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.timestamp === action.payload.timestamp) {
            return { ...note, text: action.payload.text };
          }
          return note;
        }),
      };
    default:
      return state;
  }
};

export default noteReducer;
