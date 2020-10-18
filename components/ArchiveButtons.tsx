import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { Button } from 'react-native-elements';
import { historyScreenStyles } from '../styles/styles';

interface Props {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  id?: number;
}

const ArchiveButton: React.FC<Props> = ({ title, id, onPress }) => {
  return (
    <Button
      raised
      buttonStyle={historyScreenStyles.button}
      onPress={() => onPress(id)}
      title={title}
    />
  );
};

export default ArchiveButton;
