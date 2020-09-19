import React from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../store/actions/notes';
import { Note } from '../types/allTypes';
import AddNoteInputs from './inputs/AddNoteInputs';
import Modal from './Modal';

interface Props {
  visible: boolean;
  toggleModal: () => void;
}

const AddNote: React.FC<Props> = ({ visible, toggleModal }) => {
  const dispatch = useDispatch();

  const saveNoteElement = (note: Note) => {
    console.log(note);
    dispatch(addNote(note));
    toggleModal();
  };

  return (
    <Modal visible={visible} toggle={toggleModal} title="Dodaj notatkę">
      <AddNoteInputs handleSubmit={saveNoteElement} />
    </Modal>
  );
};

export default AddNote;
