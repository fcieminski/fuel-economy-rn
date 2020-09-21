import React, { memo, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Button, Card, Icon, Image, Input, Overlay } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { Note } from '../types/allTypes';
import { dateFormat } from './utils/dateUtils';
import ImageAutoSize from './ImageAutoSize';
import Modal from './Modal';
import WarningModal from './WarningModal';

interface Props {
  note: Note;
  deleteNote: (index: number) => void;
  updateNote: (note: Note) => void;
  index: number;
}

const NoteElement: React.FC<Props> = ({ note, deleteNote, updateNote, index }) => {
  const [visible, setVisible] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [noteNewContent, setNoteNewContent] = useState('');
  const [warningModal, setWarningModal] = useState(false);
  const [focusedImage, setFocusedImage] = useState('');

  const showImage = (uri: string) => {
    setFocusedImage(uri);
    setVisible(true);
  };

  const closeImageModal = () => {
    setVisible(false);
    setFocusedImage('');
  };

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
    updateNote(newNote);
    setEditModal(false);
  };

  return (
    <Card>
      <View style={style.noteHeader}>
        {note.isImportant ? (
          <View style={style.row}>
            <Icon
              color="#ffb726"
              style={{ marginRight: 10 }}
              type="material-community"
              name="alert"
            />
            <Text style={style.textImportant}>Ważne</Text>
          </View>
        ) : (
          <View />
        )}
        <View style={style.row}>
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
      <Text style={style.content}>{note.text}</Text>
      {note.image && (
        <ScrollView horizontal style={{ marginTop: 5 }}>
          <ImageAutoSize onPress={() => showImage(note.image)} uri={note.image} />
        </ScrollView>
      )}
      <Card.Divider />
      <Text>{dateFormat(note.timestamp)}</Text>
      <Overlay onBackdropPress={closeImageModal} isVisible={visible}>
        <Image source={{ uri: focusedImage }} style={style.modalImage} />
      </Overlay>
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
          <View style={style.editNoteContainer}>
            <ScrollView>
              <Input multiline value={noteNewContent} onChangeText={handleUpdate} />
            </ScrollView>
          </View>
          <View style={style.actions}>
            <Button
              buttonStyle={[style.button, { backgroundColor: '#32a899' }]}
              onPress={toggleEditModal}
              title="Anuluj"
            />
            <Button
              buttonStyle={[style.button, { backgroundColor: '#32a899' }]}
              onPress={updateNoteText}
              title="Zapisz"
            />
          </View>
        </Modal>
      )}
    </Card>
  );
};

const style = StyleSheet.create({
  noteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  textImportant: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  galleryImage: {
    width: 100,
    height: 100,
    marginRight: 5,
  },
  modalImage: {
    maxWidth: '100%',
    width: '100%',
    height: '100%',
  },
  content: {
    fontSize: 18,
  },
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

export default memo(NoteElement);
