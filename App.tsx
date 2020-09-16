import React from 'react';
import { StatusBar } from 'expo-status-bar';
import TabNavigation from './navigation/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <StatusBar style="auto" />
          <ThemeProvider>
            <TabNavigation />
          </ThemeProvider>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
