import React, { useState } from 'react';
import {
  Button,
  Dimensions,
  GestureResponderEvent,
  KeyboardAvoidingView,
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Icon, Input, Overlay } from 'react-native-elements';

const deviceWidth = Dimensions.get('window').width;

interface ModalDialog {
  visible: boolean;
  handleSave: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  toggle: (event: GestureResponderEvent) => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalDialog> = ({ visible, handleSave, toggle, children }) => {
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
          <Button title="Zapisz" buttonStyle={style.button} onPress={handleSave} />
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
