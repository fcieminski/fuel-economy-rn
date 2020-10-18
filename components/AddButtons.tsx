import { TabNavigationState } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addButtonsStyles } from '../styles/styles';
import { Car } from '../types/allTypes';
import AddFixElement from './FixList/AddFixElement';
import AddFuelling from './Fuelling/AddFuelling';
import AddNote from './Notes/AddNote';

interface Props {
  state: TabNavigationState;
}

const AddButton: React.FC<Props> = ({ state }) => {
  const car = useSelector<RootState, Car | null>((state: RootState) => state.carInfo.car);
  const [visible, setVisible] = useState(false);

  const currentNavIndex = state.index;

  const toggleModal = () => {
    if ((currentNavIndex === 0 || currentNavIndex === 1) && !car) {
      return;
    }
    setVisible(!visible);
  };

  const mappedComponents: {
    [key: number]: React.FC<{ toggleModal: () => void; visible: boolean }>;
  } = {
    0: AddFuelling,
    1: AddFuelling,
    2: AddNote,
    3: AddFixElement,
  };

  const AddComponent = mappedComponents[currentNavIndex];

  return (
    <>
      <AddComponent toggleModal={toggleModal} visible={visible} />
      <TouchableOpacity
        activeOpacity={0.8}
        style={addButtonsStyles.buttonContainer}
        onPress={toggleModal}>
        <View style={addButtonsStyles.btn}>
          <Icon size={35} type="material-community" name="plus" color="white" />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default AddButton;
