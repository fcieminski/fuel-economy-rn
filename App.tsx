import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { addFuelling } from './store/actions/fuelling';
import { multiReadStorage } from './components/utils/storageUtils';
import { addCar } from './store/actions/car';
import TabNavigation from './navigation/TabNavigation';
import LoadingApp from './components/LoadingApp';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMainAppData() {
      setLoading(true);
      try {
        const data = await multiReadStorage(['@car', '@fuelling']);
        if (data) {
          const carData = data[0][1];
          const fuellingData = data[1][1];
          store.dispatch(addFuelling(fuellingData ? JSON.parse(fuellingData) : []));
          store.dispatch(addCar(carData ? JSON.parse(carData) : null));
        }
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
