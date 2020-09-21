import React, { useCallback, useState } from 'react';
import { Dimensions, FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';
import { Button, Card, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Modal from '../components/Modal';
import { Note } from '../types/allTypes';
import NoteElement from '../components/NoteElement';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import EmptyData from '../components/EmptyData';
import { removeNote, saveEditedNote } from '../store/actions/notes';
import {
  removeOneFromManyElements,
  saveToStorage,
  updateOneFromManyElementsById,
} from '../components/utils/storageUtils';

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
