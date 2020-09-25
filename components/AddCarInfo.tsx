import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { addCar } from '../store/actions/car';
import { Car } from '../types/allTypes';
import AddCarInfoInputs from './inputs/AddCarInfoInputs';
import Modal from './Modal';
import { saveToStorage } from './utils/storageUtils';

const AddCarInfo: React.FC = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const toggleDialog = () => {
    setVisible(!visible);
  };

  const saveCarData = async (car: Car) => {
    car.mileage = Number(car.mileage);
    await saveToStorage('@car', car);
    dispatch(addCar(car));
  };
  return (
    <Card>
      <View style={style.cardTitle}>
        <Text style={style.textHeader}>Twój samochód</Text>
      </View>
      <Card.Divider />
      <Text style={{ marginBottom: 10 }}>Dodaj swój pojazd i zacznij śledzić spalanie!</Text>
      <Card.Divider />
      <Button
        icon={<Icon name="add" color="#ffffff" />}
        buttonStyle={style.button}
        onPress={toggleDialog}
      />
      <Modal visible={visible} title="Dodaj samochód" toggle={toggleDialog}>
        <AddCarInfoInputs handleSubmit={saveCarData} />
      </Modal>
    </Card>
  );
};

const style = StyleSheet.create({
  cardTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  textNormal: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#32a899',
  },
});

export default AddCarInfo;
