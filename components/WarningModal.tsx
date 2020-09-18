import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { ModalDialog } from '../types/allTypes';
import Modal from './Modal';

interface Props extends ModalDialog {
  warningText: string;
  yes: () => void;
  no: () => void;
}

const WarningModal: React.FC<Props> = ({ toggle, visible, title, warningText, yes, no, type }) => {
  const yesButtonColor = type === 'warning' ? '#ffb726' : '#32a899';
  const noButtonColor = type === 'warning' ? '#32a899' : '#ffb726';
  return (
    <Modal type={type} toggle={toggle} visible={visible} title={title}>
      <View style={style.content}>
        <Text style={style.text}>{warningText}</Text>
      </View>
      <View style={style.actions}>
        <Button
          buttonStyle={[style.button, { backgroundColor: noButtonColor }]}
          title="Nie"
          onPress={no}
        />
        <Button
          buttonStyle={[style.button, { backgroundColor: yesButtonColor }]}
          title="Tak"
          onPress={yes}
        />
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginLeft: -10,
    marginRight: -10,
  },
  button: {
    width: 100,
    marginLeft: 10,
    marginRight: 10,
  },
  content: {
    marginLeft: 10,
    marginRight: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
  },
});

export default WarningModal;
