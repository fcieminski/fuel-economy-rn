import React from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { Icon, Overlay } from 'react-native-elements';
import { modalStyles } from '../styles/styles';
import { ModalDialog } from '../types/allTypes';

const Modal: React.FC<ModalDialog> = ({ visible, toggle, children, title, type }) => {
  const iconColor = type === 'warning' ? '#ffb726' : type === 'error' ? '#db291d' : 'white';
  return (
    <Overlay isVisible={visible}>
      <KeyboardAvoidingView behavior="padding">
        <View style={modalStyles.modal}>
          <Icon
            type="material-community"
            onPress={toggle}
            color="#32a899"
            name="close"
            size={35}
            containerStyle={modalStyles.closeIcon}
          />
          <View style={modalStyles.modalHeader}>
            {type && <Icon name="warning" style={modalStyles.icon} color={iconColor} />}
            <Text style={modalStyles.modalHeaderText}>{title}</Text>
          </View>
          <View>{children}</View>
        </View>
      </KeyboardAvoidingView>
    </Overlay>
  );
};

export default Modal;
