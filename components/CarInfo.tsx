import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import CarElement from './CarElement';

interface Car {
  car: {
    brand: string;
    model: string;
    engine: number;
    mileage: number;
  };
  removeCarData: () => void;
}

const CarInfo: React.FC<Car> = ({ car, removeCarData }) => {
  return (
    <Card>
      <View style={style.cardTitle}>
        <Text style={style.textHeader}>{`${car.brand} ${car.model}`}</Text>
        <Icon
          size={25}
          iconStyle={{ marginLeft: 10 }}
          type="material-community"
          color="#32a899"
          name="delete"
          onPress={removeCarData}
        />
      </View>
      <Card.Divider />
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
    </Card>
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
});

export default CarInfo;
