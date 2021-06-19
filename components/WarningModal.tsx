import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { warningModalStyles } from '../styles/styles';
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
      <View style={warningModalStyles.content}>
        <Text style={warningModalStyles.fontMedium}>{warningText}</Text>
      </View>
      <View style={warningModalStyles.actions}>
        <Button
          buttonStyle={[warningModalStyles.button, { backgroundColor: noButtonColor }]}
          title="Nie"
          onPress={no}
        />
        <Button
          buttonStyle={[warningModalStyles.button, { backgroundColor: yesButtonColor }]}
          title="Tak"
          onPress={yes}
        />
      </View>
    </Modal>
  );
};

export default WarningModal;
