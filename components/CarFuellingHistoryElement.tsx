import React, { memo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { Fuelling } from '../types/allTypes';
import WarningModal from './WarningModal';

interface Props {
  item: Fuelling;
  index: number;
  deleteElement: (index: number) => void;
}

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
    <View style={{ padding: 10 }}>
      <View style={style.row}>
        <Icon
          color="#32a899"
          type="material-community"
          name="gas-station"
          size={30}
          style={{ marginRight: 10 }}
        />
        <View style={style.rowSpace}>
          <Text style={{ fontSize: 16 }}>Średnie spalanie</Text>
          <View style={style.row}>
            <Text style={{ fontSize: 18, marginRight: 10 }}>
              {(item.distance / item.fuelAmount).toFixed(2)}
            </Text>
            <Text style={{ color: '#919191', fontSize: 16 }}>l/100km</Text>
          </View>
        </View>
      </View>
      <Divider style={{ marginBottom: 10, marginTop: 5, paddingTop: 1 }} />
      <View style={style.row}>
        <Icon
          color="#32a899"
          type="material-community"
          name="map-marker-distance"
          size={20}
          style={{ marginRight: 10 }}
        />
        <View style={style.rowSpace}>
          <Text style={{ fontSize: 16 }}>Dystans</Text>
          <View style={style.row}>
            <Text style={{ fontSize: 18, marginRight: 10 }}>{item.distance}</Text>
            <Text style={{ color: '#919191', fontSize: 16 }}>km</Text>
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 5 }} />
      <View style={style.row}>
        <Icon
          color="#32a899"
          type="material-community"
          name="currency-usd"
          size={20}
          style={{ marginRight: 10 }}
        />
        <View style={style.rowSpace}>
          <Text style={{ fontSize: 16 }}>Koszt</Text>
          <View style={style.row}>
            <Text style={{ fontSize: 18, marginRight: 10 }}>{item.cost}</Text>
            <Text style={{ color: '#919191', fontSize: 16 }}>zł</Text>
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 5 }} />
      <View style={style.row}>
        <Icon
          color="#32a899"
          type="material-community"
          name="water"
          size={20}
          style={{ marginRight: 10 }}
        />
        <View style={style.rowSpace}>
          <Text style={{ fontSize: 16 }}>Litry</Text>
          <View style={style.row}>
            <Text style={{ fontSize: 18, marginRight: 10 }}>{item.fuelAmount}</Text>
            <Text style={{ color: '#919191', fontSize: 16 }}>l</Text>
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 5 }} />
      <View style={style.rowSpace}>
        <Text style={{ alignSelf: 'flex-end', color: '#919191', fontSize: 16 }}>{item.date}</Text>
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

const style = StyleSheet.create({
  rowSpace: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  column: {
    flex: 1,
  },
});

export default memo(CarFuellingHistoryElement);
