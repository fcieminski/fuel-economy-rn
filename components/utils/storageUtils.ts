import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

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

export const readStorage = async (
  storage: string,
): Promise<string | Record<string, any> | Array<Record<string, any>> | null | undefined> => {
  try {
    const data: string | null = await AsyncStorage.getItem(storage);
    if (data) {
      const jsonValue: string | Record<string, any> | Array<Record<string, any>> = JSON.parse(data);
      return jsonValue;
    }
    return null;
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

export const removeOneFromManyElements = async (key: string, index: number): Promise<void> => {
  try {
    const initialData = await readStorage(key);
    if (initialData) {
      initialData.splice(index, 1);
      await AsyncStorage.setItem(key, JSON.stringify(initialData));
    }
  } catch (e) {
    console.log(e);
    Alert.alert('Błąd!', 'Nie udało się usunąć danych');
  }
};
