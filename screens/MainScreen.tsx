import React, { useEffect, useState } from 'react';
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
} from 'react-native';
import { Button, Card, Icon, Input, Overlay } from 'react-native-elements';
import CarInfo from '../components/CarInfo';
import CarFuellingHistory from '../components/CarFuellingHistory';
import Modal from '../components/Modal';
import { multiReadStorage, readStorage } from '../components/utils/storageUtils';
import { useDispatch } from 'react-redux';
import { addFuelling } from '../store/actions/fuelling';
import AddCarInfo from '../components/AddCarInfo';

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
    async function getCardData() {
      const data = await readStorage('@car');
      if (data) {
        setCar(data ? JSON.parse(data) : null);
      }
    }
    void getCardData();
  }, []);

  const saveCarData = async () => {
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

  const removeCarData = async () => {
    await AsyncStorage.removeItem('@car');
    setCar(null);
  };

  return (
    <View style={style.mainContainer}>
      {car ? (
        <CarInfo removeCarData={removeCarData} car={car} />
      ) : (
        <AddCarInfo toggleDialog={toggleDialog} />
      )}
      <CarFuellingHistory />
      <Modal visible={visible} handleSave={saveCarData} toggle={toggleDialog}>
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
