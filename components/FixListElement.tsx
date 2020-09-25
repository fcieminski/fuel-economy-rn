import React, { memo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, CheckBox, Icon, ListItem } from 'react-native-elements';
import { FixElement } from '../types/allTypes';
import WarningModal from './WarningModal';

interface Props {
  fixElement: FixElement;
  index: number;
  deleteElement: (index: number) => void;
  updateElement: (index: number, element: FixElement) => void;
}

const FixListElement: React.FC<Props> = ({ fixElement, index, deleteElement, updateElement }) => {
  const [warningModal, setWarningModal] = useState(false);

  const toggleWarningModal = () => {
    setWarningModal(!warningModal);
  };

  const handleNo = () => {
    setWarningModal(false);
  };

  const handleYes = () => {
    deleteElement(index);
    setWarningModal(false);
  };

  const handlePress = () => {
    updateElement(index, { ...fixElement, isDone: !fixElement.isDone });
  };

  return (
    <Card
      containerStyle={{
        borderTopWidth: 3,
        borderTopColor: fixElement.isDone ? '#32a899' : 'white',
        paddingTop: -3,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title style={style.textHeader}>{fixElement.item}</ListItem.Title>
        </ListItem.Content>
        <Icon
          size={25}
          type="material-community"
          color="black"
          name="delete"
          onPress={toggleWarningModal}
        />
      </ListItem>
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
            <Text style={{ fontSize: 18, marginRight: 10 }}>{fixElement.cost}</Text>
            <Text style={{ color: '#919191', fontSize: 16 }}>zł</Text>
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 5 }} />
      {fixElement.description && (
        <View style={style.row}>
          <Icon
            color="#32a899"
            type="material-community"
            name="wrench"
            size={20}
            style={{ marginRight: 10 }}
          />
          <View style={style.rowSpace}>
            <View style={style.row}>
              <Text style={{ fontSize: 16, marginRight: 10 }}>{fixElement.description}</Text>
            </View>
          </View>
        </View>
      )}
      <View style={{ marginBottom: 5 }} />
      <View style={style.row}>
        <Icon
          color="#32a899"
          type="material-community"
          name="map-marker-distance"
          size={20}
          style={{ marginRight: 10 }}
        />
        <View style={style.rowSpace}>
          <Text style={{ fontSize: 16 }}>Pozostało kilometrów</Text>
          <View style={style.row}>
            <Text style={{ fontSize: 18, marginRight: 10 }}>{fixElement.kmRemaining}</Text>
            <Text style={{ color: '#919191', fontSize: 16 }}>km</Text>
          </View>
        </View>
      </View>
      <CheckBox
        center
        title="Wymienione?"
        onPress={handlePress}
        checked={fixElement.isDone}
        checkedColor="#32a899"
      />
      <WarningModal
        toggle={toggleWarningModal}
        visible={warningModal}
        yes={handleYes}
        no={handleNo}
        title="Uwaga!"
        type="warning"
        warningText={'Czy na pewno chcesz usunąć element z listy?'}
      />
    </Card>
  );
};

const style = StyleSheet.create({
  textHeader: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  cost: {
    fontSize: 18,
    color: '#32a899',
  },
  remaining: {
    fontSize: 18,
    color: '#ffb726',
  },
  button: {
    width: 100,
    marginLeft: 10,
    marginRight: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginLeft: -10,
    marginRight: -10,
  },
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
});

export default memo(FixListElement);
