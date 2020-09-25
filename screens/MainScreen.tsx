import React from 'react';
import { StyleSheet, View, AsyncStorage, Text } from 'react-native';
import { addCar, removeCar } from '../store/actions/car';
import { Car } from '../types/allTypes';
import { saveToStorage } from '../components/utils/storageUtils';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Card } from 'react-native-elements';
import AddCarInfo from '../components/AddCarInfo';
import CarInfo from '../components/CarInfo';
import CarFuellingHistory from '../components/CarFuellingHistory';

const MainScreen: React.FC = () => {
  const car = useSelector<RootState, Car | null>((state: RootState) => state.carInfo.car);

  return (
    <View style={style.mainContainer}>
      {car ? <CarInfo car={car} /> : <AddCarInfo />}
      {car ? (
        <CarFuellingHistory />
      ) : (
        <Card>
          <Text style={style.textNormal}>Najpierw dodaj informacje o swoim aucie</Text>
        </Card>
      )}
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
