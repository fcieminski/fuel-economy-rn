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

const NotesScreen: React.FC = () => {
  const notes = useSelector<RootState, Array<Note>>((state: RootState) => state.notesState.notes);
  const dispatch = useDispatch();

  const keyExtractor = useCallback((_: Note, index: number) => index.toString(), []);

  const renderNotes: ListRenderItem<Note> = useCallback(({ item, separators, index }) => {
    return <NoteElement note={item} deleteNote={deleteNote} saveNote={saveNote} index={index} />;
  }, []);

  const deleteNote = (index: number) => {
    dispatch(removeNote(index));
  };

  const saveNote = (editedNote: Note) => {
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
      {/* {editCurrentNote.visible && (
        <Modal toggle={toggleModal} visible={editCurrentNote.visible} title="Edytuj notatkę">
          <View style={style.editNoteContainer}>
            <ScrollView>
              <Input multiline value={editCurrentNote.note.text} onChangeText={handleUpdate} />
            </ScrollView>
          </View>
          <View style={style.actions}>
            <Button
              buttonStyle={[style.button, { backgroundColor: '#32a899' }]}
              onPress={toggleModal}
              title="Anuluj"
            />
            <Button
              buttonStyle={[style.button, { backgroundColor: '#32a899' }]}
              onPress={saveNote}
              title="Zapisz"
            />
          </View>
        </Modal>
      )} */}
    </>
  );
};

const style = StyleSheet.create({
  editNoteContainer: {
    width: Dimensions.get('window').width * 0.8,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginLeft: -10,
    marginRight: -10,
  },
  button: {
    width: 100,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default NotesScreen;
