import React, { memo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CheckBox, Icon, Input, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { FixElement } from '../types/allTypes';
import Modal from './Modal';
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
      <ListItem bottomDivider>
        <Icon name="currency-usd" type="material-community" color="#32a899" />
        <ListItem.Content>
          <ListItem.Title style={style.cost}>{fixElement.cost} zł</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      {fixElement.description && (
        <ListItem bottomDivider>
          <Icon name="wrench" type="material-community" color="#32a899" />
          <ListItem.Content>
            <ListItem.Title>{fixElement.description}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      )}
      <ListItem bottomDivider>
        <Icon name="map-marker-distance" type="material-community" color="#32a899" />
        <ListItem.Content>
          <ListItem.Title>
            Pozostało kilometrów:
            <Text style={style.remaining}> {fixElement.kmRemaining} km</Text>
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <CheckBox
        title="Zrobione?"
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
    fontSize: 20,
    color: '#32a899',
  },
  remaining: {
    fontSize: 20,
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
});

export default memo(FixListElement);
