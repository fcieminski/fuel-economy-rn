import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { listStyles } from '../../styles/styles';

interface List {
  children?: React.ReactNode;
  text: string;
  description?: string;
  icon: string;
  iconSize?: number;
  header?: boolean;
}

const ListElement: React.FC<List> = ({ children, text, description, icon, iconSize, header }) => {
  return (
    <View style={listStyles.rowContainer}>
      <Icon
        color="#32a899"
        type="material-community"
        name={icon}
        size={iconSize || 20}
        style={listStyles.marginRight}
      />
      <View style={listStyles.rowSpace}>
        <Text style={header ? listStyles.headerText : listStyles.fontRegular}>{text}</Text>
        <View style={listStyles.rowContainer}>
          {children}
          <Text style={listStyles.description}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

export default ListElement;
