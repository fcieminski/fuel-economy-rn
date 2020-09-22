import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { readStorage } from '../components/utils/storageUtils';

const FixListScreen: React.FC = () => {
  const [fixList, setFixList] = useState([]);

  useEffect(() => {
    const getFixData = async () => {
      const data = readStorage('@fixList');
      if (data) {
        setFixList(data);
      }
    };
    void getFixData();
  }, []);

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default FixListScreen;
