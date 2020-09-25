import AsyncStorage from '@react-native-community/async-storage';
import { parse } from 'date-fns/esm';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFixListElement } from '../store/actions/fixList';
import { FixElement } from '../types/allTypes';
import AddFixElementInputs from './inputs/AddFixElementInputs';
import Modal from './Modal';
import { readStorage, saveToStorage } from './utils/storageUtils';

interface Props {
  visible: boolean;
  toggleModal: () => void;
}

const AddFixElement: React.FC<Props> = ({ visible, toggleModal }) => {
  const dispatch = useDispatch();
  const saveFixElement = async (fixElement: unknown) => {
    fixElement.kmRemaining = parseFixElement(fixElement.kmRemaining);
    fixElement.cost = parseFixElement(fixElement.cost);
    const storageData = await readStorage('@fixList');
    const mergedData = storageData ? [...storageData, fixElement] : [fixElement];
    await saveToStorage('@fixList', mergedData);
    dispatch(addFixListElement(fixElement));
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
