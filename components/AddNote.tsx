import React from 'react';
import AddNoteInputs from './inputs/AddNoteInputs';
import Modal from './Modal';

const AddNote = ({ visible, toggleModal }) => {
  const saveNoteElement = () => {};

  return (
    <Modal visible={visible} toggle={toggleModal} title="Dodaj notatkę">
      <AddNoteInputs handleSubmit={saveNoteElement} />
    </Modal>
  );
};

export default AddNote;
