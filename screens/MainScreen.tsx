import React, { useEffect, useState } from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { addCar, removeCar } from '../store/actions/car';
import { Car } from '../types/allTypes';
import { readStorage, saveToStorage } from '../components/utils/storageUtils';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import AddCarInfo from '../components/AddCarInfo';
import AddCarInfoInputs from '../components/inputs/AddCarInfoInputs';
import CarInfo from '../components/CarInfo';
import CarFuellingHistory from '../components/CarFuellingHistory';
import Modal from '../components/Modal';

const MainScreen: React.FC = () => {
  const car = useSelector<RootState, Car | null>((state: RootState) => state.carInfo.car);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const toggleDialog = () => {
    setVisible(!visible);
  };

  const saveCarData = async (car: Car) => {
    car.mileage = parseFloat(car.mileage);
    await saveToStorage('@car', car);
    dispatch(addCar(car));
    setVisible(false);
  };

  const removeCarData = async () => {
    await AsyncStorage.removeItem('@car');
    dispatch(removeCar());
  };

  return (
    <View style={style.mainContainer}>
      {car ? (
        <CarInfo removeCarData={removeCarData} car={car} />
      ) : (
        <AddCarInfo toggleDialog={toggleDialog} />
      )}
      <CarFuellingHistory />
      <Modal visible={visible} title="Dodaj samochód" toggle={toggleDialog}>
        <AddCarInfoInputs handleSubmit={saveCarData} />
      </Modal>
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  rowSpace: {
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  container: {
    alignItems: 'center',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  column: {
    flex: 1,
  },
  textNormal: {
    fontSize: 16,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#32a899',
  },
  cardTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
