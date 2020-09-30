import React, { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { addFuelling } from './store/actions/fuelling';
import { multiReadStorage, saveToStorage } from './components/utils/storageUtils';
import { addCar } from './store/actions/car';
import { addNote } from './store/actions/notes';
import { addFixListElement } from './store/actions/fixList';
import TabNavigation from './navigation/TabNavigation';
import LoadingApp from './components/LoadingApp';
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const askPermissions = async () => {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      return false;
    }
    return true;
  };

  useEffect(() => {
    async function getMainAppData() {
      setLoading(true);
      try {
        const data = await multiReadStorage(['@car', '@fuelling', '@notes', '@fixList']);
        if (data) {
          const carData = data[0][1];
          const fuellingData = data[1][1];
          const notesData = data[2][1];
          const fixListData = data[3][1];
          store.dispatch(addFuelling(fuellingData ? JSON.parse(fuellingData) : []));
          store.dispatch(addCar(carData ? JSON.parse(carData) : null));
          store.dispatch(addNote(notesData ? JSON.parse(notesData) : []));
          store.dispatch(addFixListElement(fixListData ? JSON.parse(fixListData) : []));
        }
        await askPermissions();
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
    void getMainAppData();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <StatusBar style="auto" />
          {loading ? (
            <LoadingApp />
          ) : (
            <ThemeProvider>
              <TabNavigation />
            </ThemeProvider>
          )}
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
