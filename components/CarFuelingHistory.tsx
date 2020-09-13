import React from 'react';
import { ListRenderItem, StyleSheet, View } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';

interface Fueling {
  distance: number;
  cost: number;
  fuelAmount: number;
  date: number;
}

const CarFuelingHistory: ListRenderItem<Fueling> = ({ item }) => {
  return (
    <ListItem bottomDivider>
      <ListItem.Content>
        <View style={style.rowSpace}>
          <Icon color="#32a899" type="material-community" name="gas-station" />
          <ListItem.Title>
            średnie spalanie: {(item.distance / item.fuelAmount).toFixed(2)}l
          </ListItem.Title>
          <ListItem.Title>{new Date(item.date).toLocaleDateString()}</ListItem.Title>
          <Icon type="material-community" name="delete" />
        </View>
        <View style={style.row}>
          <View style={style.column}>
            <ListItem.Subtitle>Dystans</ListItem.Subtitle>
            <ListItem.Subtitle>{item.distance}</ListItem.Subtitle>
          </View>
          <View style={style.column}>
            <ListItem.Subtitle>Koszt</ListItem.Subtitle>
            <ListItem.Subtitle>{item.cost}</ListItem.Subtitle>
          </View>
          <View style={style.column}>
            <ListItem.Subtitle>Litry</ListItem.Subtitle>
            <ListItem.Subtitle>{item.fuelAmount}</ListItem.Subtitle>
          </View>
          <View style={style.column}>
            <ListItem.Subtitle>zł/km</ListItem.Subtitle>
            <ListItem.Subtitle>{(item.fuelAmount / item.distance).toFixed(2)}</ListItem.Subtitle>
          </View>
          <View style={style.column}>
            <ListItem.Subtitle>zł/l</ListItem.Subtitle>
            <ListItem.Subtitle>{(item.fuelAmount / item.cost).toFixed(2)}</ListItem.Subtitle>
          </View>
        </View>
      </ListItem.Content>
    </ListItem>
  );
};

const style = StyleSheet.create({
  rowSpace: {
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  column: {
    flex: 1,
  },
});

export default CarFuelingHistory;
