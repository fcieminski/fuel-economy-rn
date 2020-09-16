import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Animated } from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableHighlight } from 'react-native-gesture-handler';

type Props = {
  addElement: () => void;
};

const AddButton: React.FC<Props> = ({ addElement }) => {
  const buttonSize = new Animated.Value(1);

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(buttonSize, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(buttonSize, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
    addElement();
  };

  return (
    <TouchableHighlight
      underlayColor="#32a899"
      style={{
        bottom: 30,
        height: 60,
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
        transform: [{ scale: buttonSize }],
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
    </TouchableHighlight>
  );
};

export default AddButton;
