import React, { memo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Icon, Image, Overlay } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import ImageAutoSize from './ImageAutoSize';
import { dateFormat } from './utils/dateUtils';

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
  const [visible, setVisible] = useState(false);
  const [focusedImage, setFocusedImage] = useState('');

  return (
    <Card>
      <View style={style.noteHeader}>
        {note.important ? (
          <View style={style.row}>
            <Icon
              color="#ffb726"
              style={{ marginRight: 10 }}
              type="material-community"
              name="alert"
            />
            <Text style={style.textImportant}>Ważne</Text>
          </View>
        ) : (
          <View />
        )}
        <Icon color="black" type="material-community" name="delete" />
      </View>
      <Card.Divider />
      <Text>{note.text}</Text>
      {note.image && (
        <ScrollView horizontal style={{ marginTop: 5 }}>
          <ImageAutoSize onPress={() => setVisible(true)} uri={note.image} />
        </ScrollView>
      )}
      <Card.Divider />
      <Text>{dateFormat(note.timestamp)}</Text>
      <Overlay onBackdropPress={() => setVisible(false)} isVisible={visible}>
        <Image source={{ uri: note.image }} style={style.modalImage} />
      </Overlay>
    </Card>
  );
};

const style = StyleSheet.create({
  noteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  textImportant: {
    fontWeight: 'bold',
  },
  galleryImage: {
    width: 100,
    height: 100,
    marginRight: 5,
  },
  modalImage: {
    width: 200,
    height: '100%',
  },
});

export default memo(Note);
