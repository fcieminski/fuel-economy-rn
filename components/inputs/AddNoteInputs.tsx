import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import * as Yup from 'yup';
import { Note } from '../../types/allTypes';

type Props = {
  handleSubmit: (notes: Record<string, string>) => void;
};

const AddNoteInputs: React.FC<Props> = ({ handleSubmit }) => {
  const noteSchema: Yup.ObjectSchema<Note | undefined, object> = Yup.object<Note>().shape({
    text: Yup.string().required('Pole wymagane!'),
  });

  return (
    <Formik
      initialValues={{
        text: '',
      }}
      validationSchema={noteSchema}
      onSubmit={handleSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <>
          <ScrollView style={{ height: 300 }}>
            <Input
              style={{ height: '100%' }}
              containerStyle={{ height: '100%' }}
              multiline
              label="Treść"
              onChangeText={handleChange('text')}
              onBlur={handleBlur('text')}
              value={values.text}
              errorMessage={errors.text && touched.text ? errors.text : undefined}
            />
          </ScrollView>
          <Button title="Zapisz" buttonStyle={style.button} onPress={handleSubmit} />
        </>
      )}
    </Formik>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: '#32a899',
  },
});

export default AddNoteInputs;
