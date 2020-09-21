import React, { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Note } from '../types/allTypes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { removeNote, saveEditedNote } from '../store/actions/notes';
import {
  removeOneFromManyElements,
  updateOneFromManyElementsById,
} from '../components/utils/storageUtils';
import NoteElement from '../components/NoteElement';
import EmptyData from '../components/EmptyData';

const NotesScreen: React.FC = () => {
  const notes = useSelector<RootState, Array<Note>>((state: RootState) => state.notesState.notes);
  const dispatch = useDispatch();

  const keyExtractor = useCallback((_: Note, index: number) => index.toString(), []);

  const renderNotes: ListRenderItem<Note> = useCallback(({ item, separators, index }) => {
    return (
      <NoteElement note={item} deleteNote={deleteNote} updateNote={updateNote} index={index} />
    );
  }, []);

  const deleteNote = async (index: number) => {
    await removeOneFromManyElements('@notes', index);
    dispatch(removeNote(index));
  };

  const updateNote = async (editedNote: Note) => {
    await updateOneFromManyElementsById('@notes', editedNote);
    dispatch(saveEditedNote(editedNote));
  };

  return (
    <>
      <FlatList
        scrollEnabled={true}
        keyExtractor={keyExtractor}
        data={notes.sort((a, b) => b.timestamp - a.timestamp)}
        ListEmptyComponent={() => <EmptyData text="Brak notatek" />}
        renderItem={renderNotes}
      />
    </>
  );
};

export default NotesScreen;
