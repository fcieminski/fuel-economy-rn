import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-elements';
import AddCarInfo from './AddCarInfo';

const MainScreenNoData: React.FC = () => {
  return (
    <>
      <AddCarInfo />
      <Card>
        <Text style={style.textNormal}>
          Aby dodać nowe tankowanie, najpierw dodaj informacje o swoim aucie
        </Text>
      </Card>
    </>
  );
};

const style = StyleSheet.create({
  textNormal: {
    fontSize: 16,
  },
});

export default MainScreenNoData;
