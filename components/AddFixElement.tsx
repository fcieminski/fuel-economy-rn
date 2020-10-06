import React from 'react';
import { useDispatch } from 'react-redux';
import { addFixListElement } from '../store/actions/fixList';
import AddFixElementInputs from './inputs/AddFixElementInputs';
import { readStorage, saveToStorage } from './utils/storageUtils';
import Modal from './Modal';

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
