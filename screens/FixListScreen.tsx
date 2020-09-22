import React, { useCallback, useEffect, useState } from 'react';
import { ListRenderItem, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import EmptyData from '../components/EmptyData';
import FixListElement from '../components/FixListElement';
import { readStorage } from '../components/utils/storageUtils';
import { FixItem } from '../types/allTypes';

const FixListScreen: React.FC = () => {
  const [fixList, setFixList] = useState([]);

  useEffect(() => {
    const getFixData = async () => {
      const data = await readStorage('@fixList');
      if (data) {
        setFixList(data);
      }
    };
    void getFixData();
  }, []);

  const keyExtractor = useCallback((_: FixItem, index: number) => index.toString(), []);

  const renderNotes: ListRenderItem<FixItem> = useCallback(({ item, separators, index }) => {
    return <FixListElement fixElement={item} index={index} />;
  }, []);

  return (
    <View>
      <FlatList
        scrollEnabled={true}
        keyExtractor={keyExtractor}
        data={fixList}
        ListEmptyComponent={() => <EmptyData text="Brak notatek" />}
        renderItem={renderNotes}
      />
    </View>
  );
};

export default FixListScreen;
