import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { Button } from 'react-native-elements';

interface Props {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  id?: number;
}

const ArchiveButton: React.FC<Props> = ({ title, id, onPress }) => {
  return (
    <Button
      raised
      buttonStyle={{
        backgroundColor: '#32a899',
        width: 110,
        borderRadius: 0,
        borderRightWidth: 1,
        borderColor: '#e3e3e3',
      }}
      onPress={() => onPress(id)}
      title={title}
    />
  );
};

export default ArchiveButton;
