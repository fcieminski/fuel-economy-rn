import React from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';

const EmptyData: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Card>
      <Text>{text}</Text>
    </Card>
  );
};

export default EmptyData;
