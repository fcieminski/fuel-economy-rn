import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { Button, Card, Icon, Input, Overlay } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import CarInfo from '../components/CarInfo';
import CarFuellingHistory from '../components/CarFuellingHistory';
import Modal from '../components/Modal';
import { multiReadStorage, readStorage } from '../components/utils/storageUtils';
import { useDispatch } from 'react-redux';
import { addFuelling } from '../store/actions/fuelling';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

interface Car {
  brand: string;
  model: string;
  engine: number;
  mileage: number;
}

const MainScreen: React.FC = () => {
  const dispatch = useDispatch();
  const [car, setCar] = useState<Car | null>(null);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [engine, setEngine] = useState('');
  const [mileage, setMileage] = useState('');
  const [visible, setVisible] = useState(false);

  const toggleDialog = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    async function getAppData() {
      const data = await multiReadStorage(['@car', '@fuelling']);
      if (data) {
        const carData = data[0][1];
        const fuellingData = data[1][1];
        setCar(carData ? JSON.parse(carData) : null);
        dispatch(addFuelling(fuellingData ? JSON.parse(fuellingData) : []));
      }
    }
    void getAppData();
  }, []);

  const saveCarInfo = async () => {
    const car = {
      brand,
      model,
      engine,
      mileage,
    };
    try {
      const jsonValue = JSON.stringify(car);
      await AsyncStorage.setItem('@car', jsonValue);
      toggleDialog();
    } catch {
      Alert.alert('Alert Title', 'My Alert Msg');
    }
  };

  return (
    <View style={style.mainContainer}>
      <Card>
        <Card.Title>{car ? `${car.brand} ${car.model}` : 'Twój samochód'}</Card.Title>
        <Card.Divider />
        {car ? (
          <CarInfo car={car} />
        ) : (
          <>
            <Text style={{ marginBottom: 10 }}>Dodaj swój pojazd i zacznij śledzić spalanie!</Text>
            <Card.Divider />
            <Button
              icon={<Icon name="add" color="#ffffff" />}
              buttonStyle={style.button}
              onPress={toggleDialog}
            />
          </>
        )}
      </Card>
      <CarFuellingHistory />
      <Modal visible={visible} handleSave={saveCarInfo} toggle={toggleDialog}>
        <Input
          label="Marka"
          leftIcon={{ type: 'material-community', name: 'factory' }}
          onChangeText={(value) => setBrand(value)}
        />
        <Input
          label="Model"
          leftIcon={{ type: 'material-community', name: 'car' }}
          onChangeText={(value) => setModel(value)}
        />
        <Input
          label="Silnik"
          keyboardType="number-pad"
          leftIcon={{ type: 'material-community', name: 'engine-outline' }}
          onChangeText={(value) => setEngine(value)}
        />
        <Input
          label="Przebieg"
          keyboardType="number-pad"
          leftIcon={{ type: 'material-community', name: 'map-marker-radius' }}
          onChangeText={(value) => setMileage(value)}
        />
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
  button: {
    backgroundColor: '#32a899',
  },
});

export default MainScreen;
