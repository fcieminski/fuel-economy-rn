import React from 'react';
import { useDispatch } from 'react-redux';
import { addFuelling } from '../store/actions/fuelling';
import { Fuelling } from '../types/allTypes';
import { readStorage, saveToStorage } from './utils/storageUtils';
import AddFuellingInputs from './inputs/AddFuellingInputs';
import Modal from './Modal';

interface Props {
  visible: boolean;
  toggleModal: () => void;
}

const AddFuelling: React.FC<Props> = ({ visible, toggleModal }) => {
  const dispatch = useDispatch();

  const saveFuellingElement = async (fuelling: Record<string, string>) => {
    const parsedFuelling: Fuelling = parseFuellingElement(fuelling);
    const storageData = await readStorage('@fuelling');
    const mergedData = storageData ? [...storageData, parsedFuelling] : [parsedFuelling];
    await saveToStorage('@fuelling', mergedData);
    dispatch(addFuelling(parsedFuelling));
    toggleModal();
  };

  const parseFuellingElement = (fuelling: Record<string, string>): Fuelling => {
    const cost = parseFloat(fuelling.cost);
    const distance = parseFloat(fuelling.distance);
    const fuelAmount = parseFloat(fuelling.fuelAmount);
    const timestamp = parseFloat(fuelling.timestamp);
    console.log(timestamp, 'save');
    return {
      cost,
      distance,
      fuelAmount,
      date: fuelling.date,
      timestamp,
    };
  };

  return (
    <Modal visible={visible} toggle={toggleModal} title="Dodaj ostatnie tankowanie">
      <AddFuellingInputs handleSubmit={saveFuellingElement} />
    </Modal>
  );
};

export default AddFuelling;
