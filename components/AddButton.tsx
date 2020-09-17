import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

type Props = {
  addElement: () => void;
};

const AddButton: React.FC<Props> = ({ addElement }) => {
  const handlePress = () => {
    addElement();
  };

  return (
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
      onPress={handlePress}>
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
  );
};

export default AddButton;
