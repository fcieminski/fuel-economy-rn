import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/MainScreen';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        activeBackgroundColor: '#32a899',
        inactiveTintColor: '#346358',
        labelStyle: { fontSize: 14 },
      }}
      initialRouteName="Main">
      <Tab.Screen
        name="Main"
        options={{
          tabBarLabel: 'Spalanie',
          tabBarIcon({ color }) {
            return <Icon color={color} type="material-community" name="gas-station" />;
          },
        }}
        component={MainScreen}
      />
      <Tab.Screen
        name="Archive"
        options={{
          tabBarLabel: 'Archiwum',
          tabBarIcon({ color }) {
            return <Icon color={color} type="material-community" name="archive" />;
          },
        }}
        component={MainScreen}
      />
      <Tab.Screen
        name="Notes"
        options={{
          tabBarLabel: 'Notatki',
          tabBarIcon({ color }) {
            return <Icon color={color} type="material-community" name="note-text" />;
          },
        }}
        component={MainScreen}
      />
      <Tab.Screen
        name="CarChecks"
        options={{
          tabBarLabel: 'Przeglądy',
          tabBarIcon({ color }) {
            return <Icon color={color} type="material-community" name="checkbox-marked-circle" />;
          },
        }}
        component={MainScreen}
      />
      <Tab.Screen
        name="FixList"
        options={{
          tabBarLabel: 'Wymiany',
          tabBarIcon({ color }) {
            return <Icon color={color} type="material-community" name="wrench" />;
          },
        }}
        component={MainScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;