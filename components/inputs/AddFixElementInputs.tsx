import { Formik } from 'formik';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';
import { FixItem } from '../../types/allTypes';
import { generateId } from '../utils/idUtils';
import { Button } from 'react-native-elements';
import * as Yup from 'yup';

interface Props {
  handleSubmit: (fixItem: unknown) => Promise<void>;
}

const AddFixElementInputs: React.FC<Props> = ({ handleSubmit }) => {
  const fixSchema: Yup.ObjectSchema<FixItem | undefined, Record<string, string>> = Yup.object<
    FixItem
  >().shape({
    item: Yup.string().required('Pole wymagane!'),
    cost: Yup.number().typeError('Wprowadź liczbę').required('Pole wymagane!'),
    kmRemaining: Yup.number().typeError('Wprowadź liczbę').required('Pole wymagane!'),
  });

  return (
    <Formik
      initialValues={{
        id: generateId(),
        item: '',
        cost: '',
        kmRemaining: '',
        timestamp: Date.now(),
      }}
      validationSchema={fixSchema}
      onSubmit={handleSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View>
          <Input
            label="Co jest do wymiany?"
            leftIcon={{ type: 'material-community', name: 'wrench' }}
            onChangeText={handleChange('item')}
            onBlur={handleBlur('item')}
            value={values.item}
            multiline
            errorMessage={errors.item && touched.item ? errors.item : undefined}
          />
          <Input
            label="Koszt wymiany"
            keyboardType="number-pad"
            leftIcon={{ type: 'material-community', name: 'currency-usd' }}
            onChangeText={handleChange('cost')}
            onBlur={handleBlur('cost')}
            value={values.cost}
            errorMessage={errors.cost && touched.cost ? errors.cost : undefined}
          />
          <Input
            label="Pozostałe km do wymiany"
            keyboardType="number-pad"
            leftIcon={{ type: 'material-community', name: 'map-marker-distance' }}
            onChangeText={handleChange('kmRemaining')}
            onBlur={handleBlur('kmRemaining')}
            value={values.kmRemaining}
            errorMessage={
              errors.kmRemaining && touched.kmRemaining ? errors.kmRemaining : undefined
            }
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

export default AddFixElementInputs;
