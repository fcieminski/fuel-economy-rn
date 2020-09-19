import React, { memo } from 'react';
import { ListRenderItem, StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Fuelling } from '../types/allTypes';

const CarFuellingHistoryElement: ListRenderItem<Fuelling> = ({ item, index, separators }) => {
  return (
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

export default memo(CarFuellingHistoryElement);
