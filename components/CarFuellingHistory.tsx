import React, { useEffect } from 'react';
import { ListRenderItem, StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Card, Icon, ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { addFuelling, removeFuelling } from '../store/actions/fuelling';
import { RootState } from '../store/store';
import { Fuelling } from '../types/fuellingHistoryTypes';
import { removeOneFromManyElements } from './utils/storageUtils';
import CarFuellingHistoryElement from './CarFuellingHistoryElement';

interface Props {
  filterBy?: string | number;
}

const CarFuellingHistory: React.FC<Props> = ({ filterBy }) => {
  const fuelling = useSelector<RootState, Array<Fuelling>>(
    (state: RootState) => state.fuelling.fuellingList,
  );
  const dispatch = useDispatch();

  const getMonth = (date: number) => new Date(date).getMonth();

  const deleteFuellingRecord = async (index: number) => {
    await removeOneFromManyElements('@fuelling', index);
    dispatch(removeFuelling(index));
  };

  const keyExtractor = (_: Fuelling, index: number) => index.toString();

  const renderItem: ListRenderItem<Fuelling> = ({ item, index, separators }) => {
    return (
      <ListItem bottomDivider>
        <ListItem.Content>
          <View style={style.rowSpace}>
            <Icon color="#32a899" type="material-community" name="gas-station" />
            <ListItem.Title>
              Spalanie: {(item.distance / item.fuelAmount).toFixed(2)}l
            </ListItem.Title>
            <ListItem.Title>{item.date}</ListItem.Title>
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
        data={
          filterBy
            ? fuelling.filter((element) => getMonth(element.timestamp) === filterBy)
            : fuelling
        }
        ListEmptyComponent={() => {
          return <Text>Dodaj pierwsze tankowanie!</Text>;
        }}
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
