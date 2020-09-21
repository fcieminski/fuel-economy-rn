import { Alert, AsyncStorage } from 'react-native';
import { Note } from '../../types/allTypes';

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
): Promise<Record<string, unknown> | Array<Record<string, unknown>> | null | undefined> => {
  try {
    const data: string | null = await AsyncStorage.getItem(storage);
    if (data) {
      const jsonValue: Record<string, unknown> | Array<Record<string, unknown>> = JSON.parse(data);
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
    Alert.alert('Błąd!', 'Nie udało się usunąć danych');
  }
};

export const updateOneFromManyElementsById = async (key: string, newValue: any): Promise<void> => {
  try {
    const currentData = await readStorage(key);
    if (currentData) {
      const updatedElements: Array<Note> = currentData.map((element: Note) => {
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
