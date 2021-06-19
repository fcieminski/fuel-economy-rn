import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const saveToStorage = async (
  storage: string,
  data: string | Record<string, any>,
): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(storage, jsonValue);
  } catch {
    Alert.alert('Błąd!', 'Nie udało się zapisać zmian');
  }
};

export const readStorage = async <T>(storage: string): Promise<T | undefined> => {
  try {
    const data: string | null = await AsyncStorage.getItem(storage);
    if (data) {
      return JSON.parse(data) as T;
    }
  } catch {
    Alert.alert('Błąd!', 'Nie udało się wczytań danych');
  }
};

export const multiReadStorage = async (
  keys: Array<string>,
): Promise<[string, string | null][] | undefined> => {
  try {
    return await AsyncStorage.multiGet(keys);
  } catch {
    Alert.alert('Błąd!', 'Nie udało się wczytań danych');
  }
};

export const removeOneFromManyElements = async <T extends Array<string>>(
  key: string,
  index: number,
): Promise<void> => {
  try {
    const initialData = await readStorage<T>(key);
    if (initialData) {
      initialData.splice(index, 1);
      await AsyncStorage.setItem(key, JSON.stringify(initialData));
    }
  } catch (e) {
    Alert.alert('Błąd!', 'Nie udało się usunąć danych');
  }
};

export const updateOneFromManyElementsById = async <T extends { id: string }>(
  key: string,
  newValue: T,
): Promise<void> => {
  try {
    const currentData = await readStorage<T>(key);
    if (currentData) {
      const updatedElements: Array<T> = currentData.map((element: T) => {
        if (element.id === newValue.id) {
          return newValue;
        }
        return element;
      });
      await saveToStorage(key, updatedElements);
    }
  } catch (e) {
    Alert.alert('Błąd!', 'Nie udało się zaktualizować danych');
  }
};
