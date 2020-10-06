import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { carStyles } from '../styles/styles';

interface Props {
  name: string;
  value: string | number;
  icon: string;
}

const CarElement: React.FC<Props> = ({ name, value, icon }) => {
  return (
    <View style={carStyles.column}>
      <View style={carStyles.row}>
        <Icon
          size={30}
          iconStyle={{ marginRight: 10 }}
          type="material-community"
          color="#32a899"
          name={icon}
        />
        <Text style={carStyles.fontRegular}>{name}</Text>
      </View>
      <Text style={carStyles.fontRegular}>{value}</Text>
    </View>
  );
};

export default CarElement;
