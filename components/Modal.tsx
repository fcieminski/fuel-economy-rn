import React from 'react';
import {
  Dimensions,
  GestureResponderEvent,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Icon, Overlay } from 'react-native-elements';

const deviceWidth = Dimensions.get('window').width;

interface ModalDialog {
  visible: boolean;
  toggle: (event: GestureResponderEvent) => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalDialog> = ({ visible, toggle, children }) => {
  return (
    <Overlay isVisible={visible}>
      <KeyboardAvoidingView behavior="padding">
        <View style={style.modal}>
          <View style={style.closeIcon}>
            <Icon type="material-community" onPress={toggle} color="#32a899" name="close" />
          </View>
          <View style={style.modalHeader}>
            <Text style={style.modalHeaderText}>Dodaj samochód</Text>
          </View>
          <View>{children}</View>
        </View>
      </KeyboardAvoidingView>
    </Overlay>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: '#32a899',
  },
  modal: {
    width: deviceWidth * 0.8,
  },
  modalHeader: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 10,
  },
  closeIcon: {
    alignSelf: 'flex-end',
  },
  modalHeaderText: {
    fontSize: 24,
  },
});

export default Modal;
