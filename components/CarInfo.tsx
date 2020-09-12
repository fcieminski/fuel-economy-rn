import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

interface Car {
  car: { brand: string; model: string; engine: number; mileage: number };
}

interface Props {
  name: string;
  value: string | number;
  icon: string;
}

const CarElement: React.FC<Props> = ({ name, value, icon }) => {
  return (
    <View style={style.column}>
      <View style={style.row}>
        <Icon
          size={30}
          iconStyle={{ marginRight: 10 }}
          type="material-community"
          color="#32a899"
          name={icon}
        />
        <Text style={style.textNormal}>{name}</Text>
      </View>
      <Text style={style.textNormal}>{value}</Text>
    </View>
  );
};

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
