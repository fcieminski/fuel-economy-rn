import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { removeCar } from '../../store/actions/car';
import { clearFuelling } from '../../store/actions/fuelling';
import { carStyles } from '../../styles/styles';
import { Car } from '../../types/allTypes';
import CarElement from './CarElement';
import WarningModal from '../WarningModal';

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
      <View style={carStyles.cardTitle}>
        <Text style={carStyles.textHeader}>{`${car.brand} ${car.model}`}</Text>
        <Icon
          size={25}
          iconStyle={carStyles.marginLeft}
          type="material-community"
          name="delete"
          onPress={toggleModal}
        />
      </View>
      <Card.Divider style={{ marginTop: 10 }} />
      <View style={carStyles.alignCenter}>
        <View style={carStyles.row}>
          <CarElement name="Marka" value={car.brand} icon="factory" />
          <CarElement name="Model" value={car.model} icon="car" />
        </View>
        <View style={carStyles.row}>
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

export default CarInfo;
