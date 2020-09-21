import { Formik } from 'formik';
import React, { useState } from 'react';
import { Button, View } from 'react-native';
import { Input } from 'react-native-elements';

const AddFixElementInputs: React.FC = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{
        distance: '',
      }}
      //   validationSchema={fuellingSchema}
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
          <Button title="Zapisz" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default AddFixElementInputs;
