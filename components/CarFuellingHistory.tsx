import React, { useState } from 'react';
import { ListRenderItem, StyleSheet, View } from 'react-native';
import { Card, Icon, ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import CarFuellingHistoryElement from './CarFuellingHistoryElement';

interface Fuelling {
  distance: number;
  cost: number;
  fuelAmount: number;
  date: number;
}

const CarFuellingHistory: React.FC = () => {
  const fuelling = useSelector<RootState, Array<Fuelling>>(
    (state: RootState) => state.fuelling.fuellingList,
  );

  const deleteFuellingRecord = (index: number) => {
    // setList((prevList) => prevList.filter((_, ind) => index !== ind));
  };

  const keyExtractor = (_: Fuelling, index: number) => index.toString();

  const renderItem: ListRenderItem<Fuelling> = ({ item, index, separators }) => {
    return (
      <ListItem bottomDivider>
        <ListItem.Content>
          <View style={style.rowSpace}>
            <Icon color="#32a899" type="material-community" name="gas-station" />
            <ListItem.Title>
              średnie spalanie: {(item.distance / item.fuelAmount).toFixed(2)}l
            </ListItem.Title>
            <ListItem.Title>{new Date(item.date).toLocaleDateString()}</ListItem.Title>
            <Icon
              onPress={() => deleteFuellingRecord(index)}
              type="material-community"
              name="delete"
            />
          </View>
          <CarFuellingHistoryElement item={item} index={index} separators={separators} />
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <Card containerStyle={style.listContainer}>
      <FlatList
        scrollEnabled={true}
        keyExtractor={keyExtractor}
        data={fuelling}
        renderItem={renderItem}
      />
    </Card>
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
  listContainer: {
    marginBottom: 10,
    flex: 1,
  },
});

export default CarFuellingHistory;
