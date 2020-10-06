import React from 'react';
import { View } from 'react-native';
import { Car } from '../types/allTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import MainScreenInformations from '../components/MainScreenInformations';
import MainScreenNoData from '../components/MainScreenNoData';
import { mainScreenStyles } from '../styles/styles';

const MainScreen: React.FC = () => {
  const car = useSelector<RootState, Car | null>((state: RootState) => state.carInfo.car);

  return (
    <View style={mainScreenStyles.mainContainer}>
      {car ? <MainScreenInformations car={car} /> : <MainScreenNoData />}
    </View>
  );
};

export default MainScreen;
