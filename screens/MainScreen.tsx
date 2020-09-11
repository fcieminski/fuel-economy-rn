import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { Button, Card, Icon, Input, Overlay } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

const deviceWidth = Dimensions.get('window').width;

interface Car {
  brand: string;
  model: string;
  engine: number;
  mileage: number;
}

const MainScreen: React.FC = () => {
  const [car, setCar] = useState<Car | null>(null);
  const [visible, setVisible] = useState(false);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [engine, setEngine] = useState('');
  const [mileage, setMileage] = useState('');

  useEffect(() => {
    async function getCarData() {
      try {
        const value = await AsyncStorage.getItem('@car');
        if (value) {
          setCar(JSON.parse(value));
        }
      } catch {
        Alert.alert('Alert Title', 'My Alert Msg');
      }
    }
    void getCarData();
  }, []);

  const toggleDialog = () => {
    setVisible(!visible);
  };

  const saveCarInfo = async () => {
    const car = {
      brand,
      model,
      engine,
      mileage,
    };
    try {
      const jsonValue = JSON.stringify(car);
      await AsyncStorage.setItem('@car', jsonValue);
      toggleDialog();
    } catch {
      Alert.alert('Alert Title', 'My Alert Msg');
    }
  };

  return (
    <View>
      <Card>
        <Card.Title>Twój samochód</Card.Title>
        <Card.Divider />
        {car ? (
          <View style={style.container}>
            <View style={style.row}>
              <View style={style.column}>
                <View style={style.row}>
                  <Icon
                    size={30}
                    iconStyle={{ marginRight: 10 }}
                    type="material-community"
                    onPress={toggleDialog}
                    color="#32a899"
                    name="factory"
                  />
                  <Text style={style.textNormal}>Marka</Text>
                </View>
                <Text style={style.textNormal}>{car.brand}</Text>
              </View>
              <View style={style.column}>
                <View style={style.row}>
                  <Icon
                    size={30}
                    iconStyle={{ marginRight: 10 }}
                    type="material-community"
                    onPress={toggleDialog}
                    color="#32a899"
                    name="car"
                  />
                  <Text style={style.textNormal}>Model</Text>
                </View>
                <Text style={style.textNormal}>{car.model}</Text>
              </View>
            </View>
            <View style={style.row}>
              <View style={style.column}>
                <View style={style.row}>
                  <Icon
                    size={30}
                    iconStyle={{ marginRight: 10 }}
                    type="material-community"
                    onPress={toggleDialog}
                    color="#32a899"
                    name="engine-outline"
                  />
                  <Text style={style.textNormal}>Silnik</Text>
                </View>
                <Text style={style.textNormal}>{car.engine}</Text>
              </View>
              <View style={style.column}>
                <View style={style.row}>
                  <Icon
                    size={30}
                    iconStyle={{ marginRight: 10 }}
                    type="material-community"
                    onPress={toggleDialog}
                    color="#32a899"
                    name="map-marker-radius"
                  />
                  <Text style={style.textNormal}>Przebieg</Text>
                </View>
                <Text style={style.textNormal}>{car.mileage} km</Text>
              </View>
            </View>
          </View>
        ) : (
          <>
            <Text style={{ marginBottom: 10 }}>Dodaj swój pojazd i zacznij śledzić spalanie!</Text>
            <Card.Divider />
            <Button
              icon={<Icon name="add" color="#ffffff" />}
              buttonStyle={style.button}
              onPress={toggleDialog}
            />
          </>
        )}
      </Card>
      <Overlay isVisible={visible}>
        <KeyboardAvoidingView behavior="padding">
          <View style={style.modal}>
            <View style={style.closeIcon}>
              <Icon type="material-community" onPress={toggleDialog} color="#32a899" name="close" />
            </View>
            <View style={style.modalHeader}>
              <Text style={style.modalHeaderText}>Dodaj samochód</Text>
            </View>
            <View>
              <Input
                label="Marka"
                leftIcon={{ type: 'material-community', name: 'factory' }}
                onChangeText={(value) => setBrand(value)}
              />
              <Input
                label="Model"
                leftIcon={{ type: 'material-community', name: 'car' }}
                onChangeText={(value) => setModel(value)}
              />
              <Input
                label="Silnik"
                keyboardType="number-pad"
                leftIcon={{ type: 'material-community', name: 'engine-outline' }}
                onChangeText={(value) => setEngine(value)}
              />
              <Input
                label="Przebieg"
                keyboardType="number-pad"
                leftIcon={{ type: 'material-community', name: 'map-marker-radius' }}
                onChangeText={(value) => setMileage(value)}
              />
            </View>
            <Button title="Zapisz" buttonStyle={style.button} onPress={saveCarInfo} />
          </View>
        </KeyboardAvoidingView>
      </Overlay>
    </View>
  );
};

const style = StyleSheet.create({
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
  button: {
    backgroundColor: '#32a899',
  },
  modal: {
    width: deviceWidth * 0.8,
  },
  modalHeader: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 10,
  },
  closeIcon: {
    alignSelf: 'flex-end',
  },
  modalHeaderText: {
    fontSize: 24,
  },
});

export default MainScreen;
