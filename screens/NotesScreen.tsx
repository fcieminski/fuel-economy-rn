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
  const [editCurrentNote, setEditCurrentNote] = useState<{ visible: boolean; note: Note | null }>({
    visible: false,
    note: null,
  });
  const dispatch = useDispatch();

  const keyExtractor = useCallback((_: Note, index: number) => index.toString(), []);

  const renderNotes: ListRenderItem<Note> = useCallback(({ item, separators, index }) => {
    return <NoteElement note={item} deleteNote={deleteNote} editNote={editNote} index={index} />;
  }, []);

  const deleteNote = (index: number) => {
    dispatch(removeNote(index));
  };

  const editNote = (note: Note) => {
    setEditCurrentNote({
      visible: true,
      note: { ...note },
    });
  };

  const toggleModal = () => {
    setEditCurrentNote({
      visible: false,
      note: null,
    });
  };

  const saveNote = () => {
    const current: Note | undefined = notes.find(
      (note) => note.timestamp === editCurrentNote.note?.timestamp,
    );
    if (current) {
      current.text = editCurrentNote.note?.text;
      dispatch(saveEditedNote(current));
      setEditCurrentNote({
        visible: false,
        note: null,
      });
    }
  };

  const handleUpdate = (value: string) => {
    setEditCurrentNote((prevEditCurrent) => {
      return {
        ...prevEditCurrent,
        note: {
          ...prevEditCurrent.note,
          text: value,
        },
      };
    });
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
      {editCurrentNote.visible && (
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
      )}
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
