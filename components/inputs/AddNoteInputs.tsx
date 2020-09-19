import { Formik } from 'formik';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, CheckBox, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import * as Yup from 'yup';
import { Note } from '../../types/allTypes';

type Props = {
  handleSubmit: (note: Note) => void;
};

const AddNoteInputs: React.FC<Props> = ({ handleSubmit }) => {
  const noteSchema: Yup.ObjectSchema<Note | undefined> = Yup.object<Note>().shape({
    text: Yup.string().required('Pole wymagane!'),
  });

  return (
    <Formik
      initialValues={{
        text: '',
        timestamp: Date.now(),
        isImportant: false,
      }}
      validationSchema={noteSchema}
      onSubmit={handleSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
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
          <CheckBox
            title="Ważna?"
            onPress={() => setFieldValue('isImportant', !values.isImportant)}
            checked={values.isImportant}
            checkedColor="#32a899"
          />
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
