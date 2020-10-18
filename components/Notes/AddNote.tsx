import React from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../store/actions/notes';
import { Note } from '../../types/allTypes';
import { readStorage, saveToStorage } from '../utils/storageUtils';
import AddNoteInputs from '../Inputs/AddNoteInputs';
import Modal from '../Modal';

interface Props {
  visible: boolean;
  toggleModal: () => void;
}

const AddNote: React.FC<Props> = ({ visible, toggleModal }) => {
  const dispatch = useDispatch();

  const saveNoteElement = async (note: Note) => {
    const storageData = await readStorage('@notes');
    const mergedData = storageData ? [...storageData, note] : [note];
    await saveToStorage('@notes', mergedData);
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
