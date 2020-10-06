import { useNavigationState } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { addButtonsStyle } from '../styles/styles';
import AddFixElement from './AddFixElement';
import AddFuelling from './AddFuelling';
import AddNote from './AddNote';

const AddButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };
  const currentNavIndex = useNavigationState((state) => state.index);

  const mappedComponents: {
    [key: number]: React.FC<{ toggleModal: () => void; visible: boolean }>;
  } = {
    0: AddFuelling,
    1: AddFuelling,
    3: AddNote,
    4: AddFixElement,
  };

  const AddComponent = mappedComponents[currentNavIndex];

  return (
    <>
      <AddComponent toggleModal={toggleModal} visible={visible} />
      <TouchableOpacity
        activeOpacity={0.8}
        style={addButtonsStyle.buttonContainer}
        onPress={toggleModal}>
        <View style={addButtonsStyle.btn}>
          <Icon size={35} type="material-community" name="plus" color="white" />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default AddButton;
