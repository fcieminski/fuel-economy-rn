import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';

interface Props {
  toggleDialog: () => void;
}

const AddCarInfo: React.FC<Props> = ({ toggleDialog }) => {
  return (
    <Card>
      <View style={style.cardTitle}>
        <Text style={style.textHeader}>Twój samochód</Text>
      </View>
      <Card.Divider />
      <Text style={{ marginBottom: 10 }}>Dodaj swój pojazd i zacznij śledzić spalanie!</Text>
      <Card.Divider />
      <Button
        icon={<Icon name="add" color="#ffffff" />}
        buttonStyle={style.button}
        onPress={toggleDialog}
      />
    </Card>
  );
};

const style = StyleSheet.create({
  cardTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  textNormal: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#32a899',
  },
});

export default AddCarInfo;
