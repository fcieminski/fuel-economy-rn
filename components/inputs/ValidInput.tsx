import React, { useState } from 'react';
import { Input } from 'react-native-elements';

const ValidInput: React.FC = ({ label, keyboardType, leftIcon, onChangeText, validator }) => {
  const [error, setError] = useState('');
  const [data, setData] = useState('');

  const validateValue = (value) => {
    if (validator === 'number' && isNaN(value)) {
      setError('Wprowadź poprawną wartość');
    } else {
      setData(value);
      setError('');
    }
  };

  const validateInput = () => {
    if (!data) {
      setError('Pole jest wymagane!');
    } else {
      onChangeText(data);
    }
  };

  return (
    <Input
      label={label}
      keyboardType={keyboardType}
      leftIcon={leftIcon}
      onChangeText={validateValue}
      errorMessage={error ? error : undefined}
      onBlur={validateInput}
    />
  );
};

export default ValidInput;
