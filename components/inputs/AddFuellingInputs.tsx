import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Fuelling } from '../../types/fuellingHistoryTypes';
import { Formik } from 'formik';
import { dateFormat, initialDate } from '../utils/dateUtils';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Yup from 'yup';

type Props = {
  handleSubmit: (fuelling: Record<string, string>) => void;
};

const timestamp = Date.now().toString();

const AddFuellingInputs: React.FC<Props> = ({ handleSubmit }) => {
  const [showDate, setShowDate] = useState(false);

  const fuellingSchema: Yup.ObjectSchema<Fuelling | undefined, object> = Yup.object<
    Fuelling
  >().shape({
    distance: Yup.number().typeError('Wprowadź liczbę').required('Pole wymagane!'),
    cost: Yup.number().typeError('Wprowadź liczbę').required('Pole wymagane!'),
    fuelAmount: Yup.number().typeError('Wprowadź liczbę').required('Pole wymagane!'),
    date: Yup.string().typeError('Wprowadź datę').required('Pole wymagane!'),
  });

  const handleDatePickerDate = (
    e: Event,
    formikValue: (
      field: string,
      value: number | string,
      shouldValidate?: boolean | undefined,
    ) => void,
  ) => {
    setShowDate(false);
    const { timestamp } = e.nativeEvent;
    if (timestamp) {
      const date = dateFormat(timestamp);
      formikValue('date', date);
      formikValue('timestamp', timestamp);
    }
  };

  return (
    <Formik
      initialValues={{
        distance: '',
        cost: '',
        fuelAmount: '',
        date: initialDate,
        timestamp,
      }}
      validationSchema={fuellingSchema}
      onSubmit={handleSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
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
          <TouchableWithoutFeedback onPress={() => setShowDate(true)}>
            <View>
              <Input
                label="Data"
                keyboardType="number-pad"
                leftIcon={{
                  type: 'material-community',
                  name: 'calendar-range',
                }}
                onBlur={handleBlur('date')}
                editable={false}
                value={values.date}
                errorMessage={errors.date && touched.date ? errors.date : undefined}
              />
            </View>
          </TouchableWithoutFeedback>
          {showDate && (
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date()}
              is24Hour={true}
              display="default"
              onChange={(e) => handleDatePickerDate(e, setFieldValue)}
            />
          )}
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
