import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import MainScreen from '../screens/MainScreen';
import AddButton from '../components/AddButton';
import ArchiveScreen from '../screens/ArchiveScreen';
import FixListScreen from '../screens/FixListScreen';
import NotesScreen from '../screens/NotesScreen';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'white',
          activeBackgroundColor: '#32a899',
          inactiveTintColor: '#346358',
          labelStyle: { fontSize: 14 },
          style: {
            backgroundColor: '#e3e3e3',
            zIndex: 10,
          },
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
          component={ArchiveScreen}
        />
        <Tab.Screen
          name="Add"
          component={AddButton}
          options={{
            tabBarButton: () => <AddButton />,
          }}
        />
        <Tab.Screen
          name="Notes"
          options={{
            tabBarLabel: 'Notatki',
            tabBarIcon({ color }) {
              return <Icon color={color} type="material-community" name="note-text" />;
            },
          }}
          component={NotesScreen}
        />

        {/* <Tab.Screen
        name="CarChecks"
        options={{
          tabBarLabel: 'Przeglądy',
          tabBarIcon({ color }) {
            return <Icon color={color} type="material-community" name="checkbox-marked-circle" />;
          },
        }}
        component={MainScreen}
      /> */}
        <Tab.Screen
          name="FixList"
          options={{
            tabBarLabel: 'Wymiany',
            tabBarIcon({ color }) {
              return <Icon color={color} type="material-community" name="wrench" />;
            },
          }}
          component={FixListScreen}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigation;
