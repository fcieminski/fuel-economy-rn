import React, { memo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { historyScreenStyles } from '../styles/styles';
import { Fuelling } from '../types/allTypes';
import WarningModal from './WarningModal';

interface Props {
  item: Fuelling;
  index: number;
  deleteElement: (index: number) => void;
}

interface List {
  children: React.ReactNode;
  text: string;
  description: string;
  icon: string;
}

const ListHeader: React.FC<List> = ({ children, text, description, icon }) => {
  return (
    <View style={[historyScreenStyles.row, historyScreenStyles.alignCenter]}>
      <Icon
        color="#32a899"
        type="material-community"
        name={icon}
        size={30}
        style={historyScreenStyles.marginRight}
      />
      <View style={historyScreenStyles.rowSpace}>
        <Text style={historyScreenStyles.fontRegular}>{text}</Text>
        <View style={[historyScreenStyles.row, historyScreenStyles.alignCenter]}>
          {children}
          <Text style={[historyScreenStyles.fontGray, historyScreenStyles.fontRegular]}>
            {description}
          </Text>
        </View>
      </View>
    </View>
  );
};

const ListElement: React.FC<List> = ({ children, text, description, icon }) => {
  return (
    <View style={[historyScreenStyles.row, historyScreenStyles.alignCenter]}>
      <Icon
        color="#32a899"
        type="material-community"
        name={icon}
        size={20}
        style={historyScreenStyles.marginRight}
      />
      <View style={historyScreenStyles.rowSpace}>
        <Text style={historyScreenStyles.fontRegular}>{text}</Text>
        <View style={[historyScreenStyles.row, historyScreenStyles.alignCenter]}>
          {children}
          <Text style={[historyScreenStyles.fontGray, historyScreenStyles.fontMedium]}>
            {description}
          </Text>
        </View>
      </View>
    </View>
  );
};

const CarFuellingHistoryElement: React.FC<Props> = ({ item, index, deleteElement }) => {
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
      <ListHeader icon="gas-station" text="Średnie spalanie" description="l/100km">
        <Text style={[historyScreenStyles.marginRight, historyScreenStyles.fontMedium]}>
          {(item.distance / item.fuelAmount).toFixed(2)}
        </Text>
      </ListHeader>
      <Divider style={historyScreenStyles.divider} />
      <ListElement icon="map-marker-distance" text="Dystans" description="km">
        <Text style={[historyScreenStyles.fontMedium, historyScreenStyles.marginRight]}>
          {item.distance}
        </Text>
      </ListElement>
      <ListElement icon="currency-usd" text="Koszt" description="zł">
        <Text style={[historyScreenStyles.fontMedium, historyScreenStyles.marginRight]}>
          {item.cost}
        </Text>
      </ListElement>
      <ListElement icon="water" text="Litry" description="l">
        <Text style={[historyScreenStyles.fontMedium, historyScreenStyles.marginRight]}>
          {item.fuelAmount}
        </Text>
      </ListElement>
      <ListElement icon="fuel" text="Cena litra" description="zł">
        <Text style={[historyScreenStyles.fontMedium, historyScreenStyles.marginRight]}>
          {item.cost / item.fuelAmount}
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

export default memo(CarFuellingHistoryElement);
