import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CarElement from './CarElement';

interface Car {
  car: { brand: string; model: string; engine: number; mileage: number };
}

const CarInfo: React.FC<Car> = ({ car }) => {
  return (
    <View style={style.container}>
      <View style={style.row}>
        <CarElement name="Marka" value={car.brand} icon="factory" />
        <CarElement name="Model" value={car.model} icon="car" />
      </View>
      <View style={style.row}>
        <CarElement name="Silnik" value={car.engine} icon="engine-outline" />
        <CarElement name="Przebieg" value={car.mileage} icon="map-marker-radius" />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
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
});

export default CarInfo;
