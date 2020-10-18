import React from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';
import AddCarInfo from './CarData/AddCarInfo';

const MainScreenNoData: React.FC = () => {
  return (
    <>
      <AddCarInfo />
      <Card>
        <Text style={{ fontSize: 16 }}>
          Aby dodać nowe tankowanie, najpierw dodaj informacje o swoim aucie
        </Text>
      </Card>
    </>
  );
};

export default MainScreenNoData;
