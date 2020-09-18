import React from 'react';
import { Dimensions, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { Icon, Overlay } from 'react-native-elements';
import { ModalDialog } from '../types/allTypes';

const deviceWidth = Dimensions.get('window').width;

const Modal: React.FC<ModalDialog> = ({ visible, toggle, children, title, type }) => {
  const iconColor = type === 'warning' ? '#ffb726' : type === 'error' ? '#db291d' : 'white';
  return (
    <Overlay isVisible={visible}>
      <KeyboardAvoidingView behavior="padding">
        <View style={style.modal}>
          <View style={style.closeIcon}>
            <Icon type="material-community" onPress={toggle} color="#32a899" name="close" />
          </View>
          <View style={style.modalHeader}>
            {type && <Icon name="warning" style={style.icon} color={iconColor} />}
            <Text style={style.modalHeaderText}>{title}</Text>
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
    alignItems: 'center',
  },
  closeIcon: {
    alignSelf: 'flex-end',
  },
  icon: {
    marginRight: 10,
  },
  modalHeaderText: {
    fontSize: 24,
  },
});

export default Modal;
