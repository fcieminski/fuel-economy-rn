import React, { useState } from 'react';
import { ListRenderItem, StyleSheet, View } from 'react-native';
import { Card, Icon, ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import CarFuelingHistoryElement from './CarFuelingHistoryElement';

interface Fueling {
  distance: number;
  cost: number;
  fuelAmount: number;
  date: number;
}

const CarFuelingHistory: React.FC = () => {
  const [list, setList] = useState<Array<Fueling>>([
    {
      distance: 456,
      cost: 125.5,
      fuelAmount: 40,
      date: Date.now(),
    },
    {
      distance: 1245,
      cost: 1225.5,
      fuelAmount: 340,
      date: Date.now(),
    },
    {
      distance: 123,
      cost: 1253.5,
      fuelAmount: 405,
      date: Date.now(),
    },
    {
      distance: 123,
      cost: 1253.5,
      fuelAmount: 405,
      date: Date.now(),
    },
    {
      distance: 123,
      cost: 1253.5,
      fuelAmount: 405,
      date: Date.now(),
    },
  ]);

  const deleteFuelingRecord = (index: number) => {
    setList((prevList) => prevList.filter((_, ind) => index !== ind));
  };

  const keyExtractor = (_: Fueling, index: number) => index.toString();

  const renderItem: ListRenderItem<Fueling> = ({ item, index, separators }) => {
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
              onPress={() => deleteFuelingRecord(index)}
              type="material-community"
              name="delete"
            />
          </View>
          <CarFuelingHistoryElement item={item} index={index} separators={separators} />
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <Card containerStyle={style.listContainer}>
      <FlatList
        scrollEnabled={true}
        keyExtractor={keyExtractor}
        data={list}
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

export default CarFuelingHistory;
