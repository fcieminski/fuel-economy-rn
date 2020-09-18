import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import TabNavigation from './navigation/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { addFuelling } from './store/actions/fuelling';
import { readStorage } from './components/utils/storageUtils';
import LoadingApp from './components/LoadingApp';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getFuellingData() {
      setLoading(true);
      try {
        const data = await readStorage('@fuelling');
        if (data) {
          store.dispatch(addFuelling(data));
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
    void getFuellingData();
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
