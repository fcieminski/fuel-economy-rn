import React, { memo, useState } from 'react';
import { Text, View } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { historyScreenStyles } from '../../styles/styles';
import { Fuelling } from '../../types/allTypes';
import ListElement from '../lists/ListElement';
import WarningModal from '../WarningModal';

interface Props {
  item: Fuelling;
  index: number;
  deleteElement: (index: number) => void;
}

const FuellingHistoryElement: React.FC<Props> = ({ item, index, deleteElement }) => {
  const [warningModal, setWarningModal] = useState(false);

  const toggleModal = () => {
    setWarningModal(!warningModal);
  };

  const handleYes = () => {
    deleteElement(index);
    toggleModal();
  };

  const handleNo = () => {
    toggleModal();
  };

  return (
    <View style={historyScreenStyles.padding}>
      <ListElement
        header
        icon="gas-station"
        text="Średnie spalanie"
        description="l/100km"
        iconSize={30}>
        <Text style={historyScreenStyles.textMediumMargin}>
          {((item.fuelAmount * 100) / item.distance).toFixed(2)}
        </Text>
      </ListElement>
      <Divider style={historyScreenStyles.divider} />
      <ListElement icon="map-marker-distance" text="Dystans" description="km">
        <Text style={historyScreenStyles.textMediumMargin}>{item.distance}</Text>
      </ListElement>
      <ListElement icon="currency-usd" text="Koszt" description="zł">
        <Text style={historyScreenStyles.textMediumMargin}>{item.cost}</Text>
      </ListElement>
      <ListElement icon="water" text="Litry" description="l">
        <Text style={historyScreenStyles.textMediumMargin}>{item.fuelAmount}</Text>
      </ListElement>
      <ListElement icon="fuel" text="Cena litra" description="zł">
        <Text style={historyScreenStyles.textMediumMargin}>
          {(item.cost / item.fuelAmount).toFixed(2)}
        </Text>
      </ListElement>
      <View style={historyScreenStyles.marginBottom} />
      <View style={historyScreenStyles.rowSpace}>
        <Text style={historyScreenStyles.dateHighlight}>{item.date}</Text>
        <Icon onPress={toggleModal} type="material-community" name="delete" />
      </View>
      <WarningModal
        toggle={toggleModal}
        visible={warningModal}
        yes={handleYes}
        no={handleNo}
        title="Uwaga!"
        type="warning"
        warningText="Czy na pewno chcesz usunąć dodane spalanie?"
      />
    </View>
  );
};

export default memo(FuellingHistoryElement);
