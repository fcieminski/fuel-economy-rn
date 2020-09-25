import React, { useCallback, useEffect, useState } from 'react';
import { ListRenderItem, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import EmptyData from '../components/EmptyData';
import FixListElement from '../components/FixListElement';
import {
  readStorage,
  removeOneFromManyElements,
  updateOneFromManyElementsById,
} from '../components/utils/storageUtils';
import { removeFixListElement, updateFixListElement } from '../store/actions/fixList';
import { RootState } from '../store/store';
import { FixElement } from '../types/allTypes';

const FixListScreen: React.FC = () => {
  const fixList = useSelector<RootState, FixElement[]>(
    (state: RootState) => state.fixListState.fixList,
  );
  const dispatch = useDispatch();

  const keyExtractor = useCallback((_: FixElement, index: number) => index.toString(), []);

  const rederFixList: ListRenderItem<FixElement> = useCallback(({ item, separators, index }) => {
    return (
      <FixListElement
        updateElement={updateElement}
        deleteElement={deleteElement}
        fixElement={item}
        index={index}
      />
    );
  }, []);

  const deleteElement = async (index: number) => {
    await removeOneFromManyElements('@fixList', index);
    dispatch(removeFixListElement(index));
  };

  const updateElement = async (index: number, element: FixElement) => {
    await updateOneFromManyElementsById('@fixList', element);
    dispatch(updateFixListElement(index, element));
  };

  return (
    <View>
      <FlatList
        scrollEnabled={true}
        keyExtractor={keyExtractor}
        data={fixList}
        ListEmptyComponent={() => <EmptyData text="Brak notatek" />}
        renderItem={rederFixList}
      />
    </View>
  );
};

export default FixListScreen;
