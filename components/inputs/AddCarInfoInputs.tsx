import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Fuelling } from '../../types/allTypes';
import { Formik } from 'formik';
import { dateFormat, initialDate } from '../utils/dateUtils';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Yup from 'yup';

type Props = {
  handleSubmit: (car: Record<string, string>) => void;
};

const AddCarInfoInputs: React.FC<Props> = ({ handleSubmit }) => {
  const fuellingSchema: Yup.ObjectSchema<Fuelling | undefined, object> = Yup.object<
    Fuelling
  >().shape({
    brand: Yup.string().required('Pole wymagane!'),
    model: Yup.string().required('Pole wymagane!'),
    engine: Yup.string().required('Pole wymagane!'),
    mileage: Yup.number().typeError('Wprowadź liczbę').required('Pole wymagane!'),
  });

  return (
    <Formik
      initialValues={{
        brand: '',
        model: '',
        engine: '',
        mileage: '',
      }}
      validationSchema={fuellingSchema}
      onSubmit={handleSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View>
          <Input
            label="Marka"
            leftIcon={{ type: 'material-community', name: 'factory' }}
            onChangeText={handleChange('brand')}
            onBlur={handleBlur('brand')}
            value={values.brand}
            errorMessage={errors.brand && touched.brand ? errors.brand : undefined}
          />
          <Input
            label="Model"
            leftIcon={{ type: 'material-community', name: 'car' }}
            onChangeText={handleChange('model')}
            onBlur={handleBlur('model')}
            value={values.model}
            errorMessage={errors.model && touched.model ? errors.model : undefined}
          />
          <Input
            label="Silnik"
            keyboardType="number-pad"
            leftIcon={{ type: 'material-community', name: 'engine-outline' }}
            onChangeText={handleChange('engine')}
            onBlur={handleBlur('engine')}
            value={values.engine}
            errorMessage={errors.engine && touched.engine ? errors.engine : undefined}
          />
          <Input
            label="Przebieg"
            keyboardType="number-pad"
            leftIcon={{ type: 'material-community', name: 'map-marker-radius' }}
            onChangeText={handleChange('mileage')}
            onBlur={handleBlur('mileage')}
            value={values.mileage}
            errorMessage={errors.mileage && touched.mileage ? errors.mileage : undefined}
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

export default AddCarInfoInputs;
