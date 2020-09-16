import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Fuelling } from '../../store/actions/types';
import { Formik } from 'formik';
import * as Yup from 'yup';

type Props = {
  handleSubmit: (fuelling: Fuelling) => void;
};

const AddFuellingInputs: React.FC<Props> = ({ handleSubmit }) => {
  const fuelingSchema: Yup.ObjectSchema<Fuelling | undefined, object> = Yup.object<
    Fuelling
  >().shape({
    distance: Yup.number().typeError('Wprowadź liczbę').required('Pole wymagane!'),
    cost: Yup.number().typeError('Wprowadź liczbę').required('Pole wymagane!'),
    fuelAmount: Yup.number().typeError('Wprowadź liczbę').required('Pole wymagane!'),
    date: Yup.number().typeError('Wprowadź liczbę').required('Pole wymagane!'),
  });

  return (
    <Formik
      initialValues={{ distance: '', cost: '', fuelAmount: '', date: '' }}
      validationSchema={fuelingSchema}
      onSubmit={handleSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View>
          <Input
            label="Dystans"
            keyboardType="number-pad"
            leftIcon={{ type: 'material-community', name: 'map-marker-distance' }}
            onChangeText={handleChange('distance')}
            onBlur={handleBlur('distance')}
            value={values.distance}
            errorMessage={errors.distance && touched.distance ? errors.distance : undefined}
          />
          <Input
            label="Koszt"
            keyboardType="number-pad"
            leftIcon={{ type: 'material-community', name: 'currency-usd' }}
            onChangeText={handleChange('cost')}
            onBlur={handleBlur('cost')}
            value={values.cost}
            errorMessage={errors.cost && touched.cost ? errors.cost : undefined}
          />
          <Input
            label="Ilość benzyny"
            keyboardType="number-pad"
            leftIcon={{ type: 'material-community', name: 'fuel' }}
            onChangeText={handleChange('fuelAmount')}
            onBlur={handleBlur('fuelAmount')}
            value={values.fuelAmount}
            errorMessage={errors.fuelAmount && touched.fuelAmount ? errors.fuelAmount : undefined}
          />
          <Input
            label="Data"
            keyboardType="number-pad"
            leftIcon={{ type: 'material-community', name: 'calendar-range' }}
            onChangeText={handleChange('date')}
            onBlur={handleBlur('date')}
            value={values.date}
            errorMessage={errors.date && touched.date ? errors.date : undefined}
          />
          <Button title="Zapisz" buttonStyle={style.button} onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: '#32a899',
  },
});

export default AddFuellingInputs;
