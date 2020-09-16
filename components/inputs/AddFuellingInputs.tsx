import React, { useState } from 'react';
import { NativeSyntheticEvent, NativeTouchEvent, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Fuelling } from '../../store/actions/types';
import ValidInput from './ValidInput';

type Props = {
  handleSave: (fuelling: Fuelling) => void;
};

const AddFuellingInputs: React.FC<Props> = ({ handleSave }) => {
  const [fuelling, setFuelling] = useState<Fuelling>({} as Fuelling);

  const handleChange = (value: string, key: string) => {
    setFuelling((prevFuelling) => ({ ...prevFuelling, [key]: value }));
  };

  return (
    <>
      <ValidInput
        label="Dystans"
        keyboardType="number-pad"
        leftIcon={{ type: 'material-community', name: 'map-marker-distance' }}
        onChangeText={(value) => handleChange(value, 'distance')}
        validator="number"
      />
      <ValidInput
        label="Koszt"
        keyboardType="number-pad"
        leftIcon={{ type: 'material-community', name: 'currency-usd' }}
        onChangeText={(value) => handleChange(value, 'cost')}
        validator="number"
      />
      <Input
        label="Ilość benzyny"
        keyboardType="number-pad"
        leftIcon={{ type: 'material-community', name: 'fuel' }}
        onChangeText={(value) => handleChange(value, 'fuelAmount')}
      />
      <Input
        label="Data"
        keyboardType="number-pad"
        leftIcon={{ type: 'material-community', name: 'calendar-range' }}
        onChangeText={(value) => handleChange(value, 'date')}
      />
      <Button title="Zapisz" buttonStyle={style.button} onPress={() => handleSave(fuelling)} />
    </>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: '#32a899',
  },
});

export default AddFuellingInputs;
