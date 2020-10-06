import React, { memo, useState } from 'react';
import { Text, View } from 'react-native';
import { Card, CheckBox, Icon, ListItem } from 'react-native-elements';
import { FixElement } from '../types/allTypes';
import { fixListStyles } from '../styles/styles';
import WarningModal from './WarningModal';
import ListElement from './lists/ListElement';

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
          <ListItem.Title style={fixListStyles.textHeader}>{fixElement.item}</ListItem.Title>
        </ListItem.Content>
        <Icon
          size={25}
          type="material-community"
          color="black"
          name="delete"
          onPress={toggleWarningModal}
        />
      </ListItem>
      <View style={fixListStyles.marginBottom} />
      {fixElement.description && <ListElement text={fixElement.description} icon="wrench" />}
      <View style={fixListStyles.marginBottom} />
      <ListElement description="zł" text="Koszt" icon="currency-usd">
        <Text style={fixListStyles.textMediumMargin}>{fixElement.cost}</Text>
      </ListElement>
      <View style={fixListStyles.marginBottom} />
      <ListElement description="km" text="Pozostało kilometrów" icon="map-marker-distance">
        <Text style={fixListStyles.textMediumMargin}>{fixElement.kmRemaining}</Text>
      </ListElement>
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

export default memo(FixListElement);
