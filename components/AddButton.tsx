import { useNavigation, useNavigationState, useRoute } from '@react-navigation/native';
import React, { Component, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import AddFuelling from './AddFuelling';
import AddNote from './AddNote';

const AddButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };
  const currentNavIndex = useNavigationState((state) => state.index);

  const mappedComponents = {
    0: AddFuelling,
    1: AddFuelling,
    3: AddNote,
    4: AddNote,
  };

  const AddComponent = mappedComponents[currentNavIndex];

  return (
    <>
      <AddComponent toggleModal={toggleModal} visible={visible} />
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          height: 60,
          bottom: 30,
          width: 60,
          borderRadius: 58,
          backgroundColor: '#32a899',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 10,
        }}
        onPress={toggleModal}>
        <View
          style={{
            borderColor: 'white',
            borderWidth: 2,
            width: '100%',
            height: '100%',
            borderRadius: 58,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon size={35} type="material-community" name="plus" color="white" />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default AddButton;
