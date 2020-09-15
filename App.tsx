import React from 'react';
import { StatusBar } from 'expo-status-bar';
import TabNavigation from './navigation/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <ThemeProvider>
          <TabNavigation />
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
