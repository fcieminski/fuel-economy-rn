import React, { useState } from 'react';
import AddFixElementInputs from './inputs/AddFixElementInputs';
import Modal from './Modal';

const AddFixElement: React.FC = ({ visible, toggleModal }) => {
  const saveFixElement = () => {
    console.log('fix');
  };

  return (
    <Modal visible={visible} toggle={toggleModal} title="Dodaj najbliższą naprawę">
      <AddFixElementInputs handleSubmit={saveFixElement} />
    </Modal>
  );
};

export default AddFixElement;
