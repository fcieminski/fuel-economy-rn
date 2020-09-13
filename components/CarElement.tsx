import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

interface Props {
  name: string;
  value: string | number;
  icon: string;
}

const CarElement: React.FC<Props> = ({ name, value, icon }) => {
  return (
    <View style={style.column}>
      <View style={style.row}>
        <Icon
          size={30}
          iconStyle={{ marginRight: 10 }}
          type="material-community"
          color="#32a899"
          name={icon}
        />
        <Text style={style.textNormal}>{name}</Text>
      </View>
      <Text style={style.textNormal}>{value}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  column: {
    flex: 1,
  },
  textNormal: {
    fontSize: 16,
  },
});

export default CarElement;
