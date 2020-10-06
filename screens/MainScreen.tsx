import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Car } from '../types/allTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import MainScreenInformations from '../components/MainScreenInformations';
import MainScreenNoData from '../components/MainScreenNoData';

const MainScreen: React.FC = () => {
  const car = useSelector<RootState, Car | null>((state: RootState) => state.carInfo.car);

  return (
    <View style={style.mainContainer}>
      {car ? <MainScreenInformations car={car} /> : <MainScreenNoData />}
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  rowSpace: {
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  container: {
    alignItems: 'center',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  column: {
    flex: 1,
  },
  textNormal: {
    fontSize: 16,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#32a899',
  },
  cardTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
