import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Icon, ListItem } from 'react-native-elements';
import { FixElement } from '../types/allTypes';

interface Props {
  fixElement: FixElement;
  index: number;
}

const FixListElement: React.FC<Props> = ({ fixElement, index }) => {
  return (
    <Card>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title style={style.textHeader}>{fixElement.item}</ListItem.Title>
        </ListItem.Content>
        <Icon
          size={25}
          iconStyle={{ marginLeft: 10 }}
          type="material-community"
          color="black"
          name="delete"
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
      <Card.Divider />
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
});

export default FixListElement;
