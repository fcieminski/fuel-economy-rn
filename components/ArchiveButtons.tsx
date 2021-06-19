import React from 'react';
import { Button } from 'react-native-elements';
import { historyScreenStyles } from '../styles/styles';

interface Props {
  title: string;
  onPress: (id: number | undefined) => void;
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
