import { Note } from '../../types/allTypes';
import { ADD_NOTE, REMOVE_NOTE, EDIT_NOTE, NoteTypes } from './types';

export const addNote = (note: Note): NoteTypes => {
  return {
    type: ADD_NOTE,
    payload: note,
  };
};

export const removeNote = (index: number): NoteTypes => {
  return {
    type: REMOVE_NOTE,
    payload: index,
  };
};

export const saveEditedNote = (note: Note): NoteTypes => {
  return {
    type: EDIT_NOTE,
    payload: note,
  };
};
