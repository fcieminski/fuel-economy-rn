import React from 'react';
import { useDispatch } from 'react-redux';
import { addFuelling } from '../../store/actions/fuelling';
import { Car, FixElement, Fuelling } from '../../types/allTypes';
import { readStorage, saveToStorage } from '../utils/storageUtils';
import AddFuellingInputs from '../inputs/AddFuellingInputs';
import Modal from '../Modal';
import { increaseCarMileage } from '../../store/actions/car';
import { decreaseFixListElementDistance } from '../../store/actions/fixList';
import * as Notifications from 'expo-notifications';

interface Props {
  visible: boolean;
  toggleModal: () => void;
}

const AddFuelling: React.FC<Props> = ({ visible, toggleModal }) => {
  const dispatch = useDispatch();

  const saveFuellingElement = async (fuelling: Record<string, string>) => {
    const parsedFuelling: Fuelling = parseFuellingElement(fuelling);
    const storageData = await readStorage<Fuelling>('@fuelling');
    const mergedData = storageData ? [...storageData, parsedFuelling] : [parsedFuelling];
    await saveToStorage('@fuelling', mergedData);
    await updateCarMileage(parsedFuelling.distance);
    await updateFixListElements(parsedFuelling.distance);
    dispatch(addFuelling(parsedFuelling));
    toggleModal();
  };

  const updateCarMileage = async (mileage: number) => {
    const carData = await readStorage<Car>('@car');
    if (carData) {
      carData.mileage += mileage;
      await saveToStorage('@car', carData);
      dispatch(increaseCarMileage(mileage));
    }
  };

  const updateFixListElements = async (kilometers: number) => {
    const fixList = await readStorage<FixElement[]>('@fixList');
    if (fixList) {
      const updatedFixList = fixList.map((fixElement) => {
        if (fixElement.isDone) {
          return fixElement;
        } else {
          return {
            ...fixElement,
            kmRemaining: fixElement.kmRemaining -= kilometers,
          };
        }
      });
      await saveToStorage('@fixList', updatedFixList);
      dispatch(decreaseFixListElementDistance(updatedFixList));
      sendNotification(updatedFixList);
    }
  };

  const sendNotification = (fixList: FixElement[]) => {
    const elementsToNotificate: FixElement[] = fixList.filter(
      (fixElement: FixElement): boolean => fixElement.kmRemaining <= 0,
    );
    elementsToNotificate.forEach((fixElement: FixElement) => {
      void sendNotificationImmediately(fixElement);
    });
  };

  const sendNotificationImmediately = async (element: FixElement) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Uwaga, zbliża się wymiana!',
        body: `To już pora wymienić ${element.item}! Umów się do mechanika i przygotuj ${element.cost} zł`,
      },
      trigger: {
        seconds: 10,
      },
    });
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
      <Modal visible={visible} toggle={toggleModal} title="Dodaj ostatnie tankowanie">
        <AddFuellingInputs handleSubmit={saveFuellingElement} />
      </Modal>
    </>
  );
};

export default AddFuelling;
