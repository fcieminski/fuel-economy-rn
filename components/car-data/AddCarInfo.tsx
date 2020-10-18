import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { addCar } from '../../store/actions/car';
import { carStyles } from '../../styles/styles';
import { Car } from '../../types/allTypes';
import { saveToStorage } from '../utils/storageUtils';
import AddCarInfoInputs from '../Inputs/AddCarInfoInputs';
import Modal from '../Modal';

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
      <View style={carStyles.cardTitle}>
        <Text style={carStyles.textHeader}>Twój samochód</Text>
      </View>
      <Card.Divider />
      <Text style={carStyles.text}>Dodaj swój pojazd i zacznij śledzić spalanie!</Text>
      <Card.Divider />
      <Button
        icon={<Icon name="add" color="#ffffff" />}
        buttonStyle={carStyles.button}
        onPress={toggleDialog}
      />
      <Modal visible={visible} title="Dodaj samochód" toggle={toggleDialog}>
        <AddCarInfoInputs handleSubmit={saveCarData} />
      </Modal>
    </Card>
  );
};

export default AddCarInfo;
