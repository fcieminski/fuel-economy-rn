import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { removeCar } from '../store/actions/car';
import { addFuelling, clearFuelling } from '../store/actions/fuelling';
import { Car } from '../types/allTypes';
import CarElement from './CarElement';
import WarningModal from './WarningModal';

interface Props {
  car: Car;
}

const CarInfo: React.FC<Props> = ({ car }) => {
  const [warningModal, setWarningModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setWarningModal(!warningModal);
  };

  const handleYes = () => {
    dispatch(removeCar());
    dispatch(clearFuelling());
    toggleModal();
  };

  const handleNo = () => {
    toggleModal();
  };

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
          onPress={toggleModal}
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
      <WarningModal
        toggle={toggleModal}
        visible={warningModal}
        yes={handleYes}
        no={handleNo}
        title="Uwaga!"
        type="warning"
        warningText="Czy na pewno chcesz usunąć informację o aucie? Wyczyści to całą historię spalania!"
      />
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
