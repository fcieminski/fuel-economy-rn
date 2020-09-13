import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { Button, Card, Icon, Input, Overlay, ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import CarInfo from '../components/CarInfo';
import CarFuelingHistory from '../components/CarFuelingHistory';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const list = [
  {
    distance: 456,
    cost: 125.5,
    fuelAmount: 40,
    date: Date.now(),
  },
  {
    distance: 1245,
    cost: 1225.5,
    fuelAmount: 340,
    date: Date.now(),
  },
  {
    distance: 123,
    cost: 1253.5,
    fuelAmount: 405,
    date: Date.now(),
  },
  {
    distance: 123,
    cost: 1253.5,
    fuelAmount: 405,
    date: Date.now(),
  },
  {
    distance: 123,
    cost: 1253.5,
    fuelAmount: 405,
    date: Date.now(),
  },
];

interface Car {
  brand: string;
  model: string;
  engine: number;
  mileage: number;
}

const MainScreen: React.FC = () => {
  const [car, setCar] = useState<Car | null>(null);
  const [visible, setVisible] = useState(false);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [engine, setEngine] = useState('');
  const [mileage, setMileage] = useState('');

  useEffect(() => {
    async function getCarData() {
      try {
        const value = await AsyncStorage.getItem('@car');
        if (value) {
          setCar(JSON.parse(value));
        }
      } catch {
        Alert.alert('Alert Title', 'My Alert Msg');
      }
    }
    void getCarData();
  }, []);

  const toggleDialog = () => {
    setVisible(!visible);
  };

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

  const keyExtractor = (_, index: number) => index.toString();

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
      <Card containerStyle={style.listContainer}>
        <FlatList
          scrollEnabled={true}
          keyExtractor={keyExtractor}
          data={list}
          renderItem={CarFuelingHistory}
        />
      </Card>
      <Overlay isVisible={visible}>
        <KeyboardAvoidingView behavior="padding">
          <View style={style.modal}>
            <View style={style.closeIcon}>
              <Icon type="material-community" onPress={toggleDialog} color="#32a899" name="close" />
            </View>
            <View style={style.modalHeader}>
              <Text style={style.modalHeaderText}>Dodaj samochód</Text>
            </View>
            <View>
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
            </View>
            <Button title="Zapisz" buttonStyle={style.button} onPress={saveCarInfo} />
          </View>
        </KeyboardAvoidingView>
      </Overlay>
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
  modal: {
    width: deviceWidth * 0.8,
  },
  modalHeader: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 10,
  },
  closeIcon: {
    alignSelf: 'flex-end',
  },
  modalHeaderText: {
    fontSize: 24,
  },
  listContainer: {
    marginBottom: 10,
    flex: 1,
  },
});

export default MainScreen;
