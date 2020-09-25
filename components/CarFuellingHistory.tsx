import React, { useCallback, useMemo } from 'react';
import { ListRenderItem, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { removeFuelling } from '../store/actions/fuelling';
import { RootState } from '../store/store';
import { Fuelling } from '../types/allTypes';
import { removeOneFromManyElements } from './utils/storageUtils';
import CarFuellingHistoryElement from './CarFuellingHistoryElement';
import EmptyData from './EmptyData';

interface Props {
  filterBy?: string | number;
}

const getMonth = (date: number) => new Date(date).getMonth();

const CarFuellingHistory: React.FC<Props> = ({ filterBy }) => {
  const fuelling = useSelector<RootState, Fuelling[]>(
    (state: RootState) => state.fuelling.fuellingList,
  );
  const filteredFuelling = useMemo(() => {
    return fuelling.filter((element) => getMonth(element.timestamp) === filterBy);
  }, [fuelling, filterBy]);
  const dispatch = useDispatch();

  const deleteFuellingRecord = async (index: number) => {
    await removeOneFromManyElements('@fuelling', index);
    dispatch(removeFuelling(index));
  };

  const keyExtractor = useCallback((_: Fuelling, index: number) => index.toString(), []);

  const renderItem: ListRenderItem<Fuelling> = useCallback(({ item, index }) => {
    return (
      <CarFuellingHistoryElement deleteElement={deleteFuellingRecord} item={item} index={index} />
    );
  }, []);

  return (
    <Card containerStyle={style.listContainer}>
      <FlatList
        scrollEnabled={true}
        keyExtractor={keyExtractor}
        windowSize={5}
        data={filterBy ? filteredFuelling : fuelling}
        ListEmptyComponent={() => <EmptyData text="Dodaj pierwsze tankowanie!" />}
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
