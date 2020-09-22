import AsyncStorage from '@react-native-community/async-storage';
import { parse } from 'date-fns/esm';
import React, { useState } from 'react';
import { FixItem } from '../types/allTypes';
import AddFixElementInputs from './inputs/AddFixElementInputs';
import Modal from './Modal';
import { readStorage, saveToStorage } from './utils/storageUtils';

interface Props {
  visible: boolean;
  toggleModal: () => void;
}

const AddFixElement: React.FC<Props> = ({ visible, toggleModal }) => {
  const saveFixElement = async (fixItem: unknown) => {
    fixItem.kmRemaining = parseFixElement(fixItem.kmRemaining);
    fixItem.cost = parseFixElement(fixItem.cost);
    const storageData = await readStorage('@fixList');
    const mergedData = storageData ? [...storageData, fixItem] : [fixItem];
    await saveToStorage('@fixList', mergedData);
    toggleModal();
  };

  const parseFixElement = (element: number): number => {
    return Number(element);
  };

  return (
    <Modal visible={visible} toggle={toggleModal} title="Dodaj najbliższą naprawę">
      <AddFixElementInputs handleSubmit={saveFixElement} />
    </Modal>
  );
};

export default AddFixElement;
