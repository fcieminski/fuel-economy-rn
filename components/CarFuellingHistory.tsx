import React, { useCallback, useMemo } from 'react';
import { ListRenderItem } from 'react-native';
import { Card } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { removeFuelling } from '../store/actions/fuelling';
import { RootState } from '../store/store';
import { Fuelling } from '../types/allTypes';
import { readStorage, removeOneFromManyElements, saveToStorage } from './utils/storageUtils';
import { decreaseCarMileage } from '../store/actions/car';
import { historyScreenStyles } from '../styles/styles';
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
    await updateCarMileage(fuelling[index].distance);
    dispatch(removeFuelling(index));
  };

  const updateCarMileage = async (mileage: number) => {
    const carData = await readStorage('@car');
    if (carData) {
      carData.mileage -= mileage;
      await saveToStorage('@car', carData);
      dispatch(decreaseCarMileage(mileage));
    }
  };

  const keyExtractor = useCallback((_: Fuelling, index: number) => index.toString(), []);

  const renderItem: ListRenderItem<Fuelling> = useCallback(({ item, index }) => {
    return (
      <CarFuellingHistoryElement deleteElement={deleteFuellingRecord} item={item} index={index} />
    );
  }, []);

  return (
    <Card containerStyle={historyScreenStyles.listContainer}>
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

export default CarFuellingHistory;
