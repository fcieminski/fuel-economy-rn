import React, { memo, useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Card, Icon, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { Note } from '../types/allTypes';
import { dateFormat } from './utils/dateUtils';
import { notesStyles } from '../styles/styles';
import Modal from './Modal';
import WarningModal from './WarningModal';

interface Props {
  note: Note;
  deleteNote: (index: number) => void;
  updateNote: (index: number, note: Note) => void;
  index: number;
}

const NoteElement: React.FC<Props> = ({ note, deleteNote, updateNote, index }) => {
  const [editModal, setEditModal] = useState(false);
  const [noteNewContent, setNoteNewContent] = useState('');
  const [warningModal, setWarningModal] = useState(false);

  const toggleWarningModal = () => {
    setWarningModal(!warningModal);
  };

  const handleNo = () => {
    setWarningModal(false);
  };

  const handleYes = () => {
    deleteNote(index);
    setWarningModal(false);
  };

  const handleUpdate = (value: string) => {
    setNoteNewContent(value);
  };

  const toggleEditModal = () => {
    setEditModal(!editModal);
    setNoteNewContent(note.text);
  };

  const updateNoteText = () => {
    const newNote = { ...note };
    newNote.text = noteNewContent;
    newNote.timestamp = Date.now();
    updateNote(index, newNote);
    setEditModal(false);
  };

  return (
    <Card>
      <View style={notesStyles.noteHeader}>
        {note.isImportant ? (
          <View style={notesStyles.row}>
            <Icon
              color="#ffb726"
              style={{ marginRight: 10 }}
              type="material-community"
              name="alert"
            />
            <Text style={notesStyles.textImportant}>Ważne</Text>
          </View>
        ) : (
          <View />
        )}
        <View style={notesStyles.row}>
          <Icon
            onPress={toggleEditModal}
            color="black"
            type="material-community"
            name="pencil"
            iconStyle={{ marginRight: 20 }}
          />
          <Icon
            onPress={toggleWarningModal}
            color="black"
            type="material-community"
            name="delete"
          />
        </View>
      </View>
      <Card.Divider />
      <Text style={notesStyles.content}>{note.text}</Text>
      <Text style={notesStyles.text}>{dateFormat(note.timestamp)}</Text>
      <WarningModal
        toggle={toggleWarningModal}
        visible={warningModal}
        yes={handleYes}
        no={handleNo}
        title="Uwaga!"
        type="warning"
        warningText={`Czy na pewno chcesz usunąć notatkę? ${
          note.isImportant ? 'Ta notatka jest oznaczona jako ważna!' : ''
        }`}
      />
      {editModal && (
        <Modal toggle={toggleEditModal} visible={editModal} title="Edytuj notatkę">
          <View style={notesStyles.editNoteContainer}>
            <ScrollView>
              <Input multiline value={noteNewContent} onChangeText={handleUpdate} />
            </ScrollView>
          </View>
          <View style={notesStyles.actions}>
            <Button buttonStyle={notesStyles.button} onPress={toggleEditModal} title="Anuluj" />
            <Button buttonStyle={notesStyles.button} onPress={updateNoteText} title="Zapisz" />
          </View>
        </Modal>
      )}
    </Card>
  );
};

export default memo(NoteElement);
