import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFuelling } from '../store/actions/fuelling';
import { Car, Fuelling } from '../types/allTypes';
import { readStorage, saveToStorage } from './utils/storageUtils';
import AddFuellingInputs from './inputs/AddFuellingInputs';
import Modal from './Modal';
import { RootState } from '../store/store';
import { increaseCarMileage, updateMileage } from '../store/actions/car';

interface Props {
  visible: boolean;
  toggleModal: () => void;
}

const AddFuelling: React.FC<Props> = ({ visible, toggleModal }) => {
  const car = useSelector<RootState, Car | null>((state: RootState) => state.carInfo.car);
  const dispatch = useDispatch();

  const saveFuellingElement = async (fuelling: Record<string, string>) => {
    const parsedFuelling: Fuelling = parseFuellingElement(fuelling);
    const storageData = await readStorage('@fuelling');
    const mergedData = storageData ? [...storageData, parsedFuelling] : [parsedFuelling];
    await saveToStorage('@fuelling', mergedData);
    await updateCarMileage(parsedFuelling.distance);
    dispatch(addFuelling(parsedFuelling));
    toggleModal();
  };

  const updateCarMileage = async (mileage: number) => {
    const carData = await readStorage('@car');
    if (carData) {
      carData.mileage += mileage;
      await saveToStorage('@car', carData);
      dispatch(increaseCarMileage(mileage));
    }
  };

  const parseFuellingElement = (fuelling: Record<string, string>): Fuelling => {
    const cost = parseFloat(fuelling.cost);
    const distance = parseFloat(fuelling.distance);
    const fuelAmount = parseFloat(fuelling.fuelAmount);
    const timestamp = parseFloat(fuelling.timestamp);
    return {
      cost,
      distance,
      fuelAmount,
      date: fuelling.date,
      timestamp,
    };
  };

  return (
    <>
      {car && (
        <Modal visible={visible} toggle={toggleModal} title="Dodaj ostatnie tankowanie">
          <AddFuellingInputs handleSubmit={saveFuellingElement} />
        </Modal>
      )}
    </>
  );
};

export default AddFuelling;
