import React from 'react';
import { Text } from 'react-native';
import { Card, Icon } from 'react-native-elements';

type Note = {
  text: string;
  id: number;
  important: boolean;
  image: string;
  timestamp: number;
};

interface Props {
  note: Note;
}

const Note: React.FC<Props> = ({ note }) => {
  return (
    <Card>
      <Text>{note.text}</Text>
      <Card.Divider />
      {note.important && <Icon color="yellow" type="material-community" name="alert" />}
      <Text>{note.timestamp}</Text>
    </Card>
  );
};

export default Note;
