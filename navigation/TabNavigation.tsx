import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MainScreen from '../screens/MainScreen';
import ArchiveScreen from '../screens/ArchiveScreen';
import FixListScreen from '../screens/FixListScreen';
import NotesScreen from '../screens/NotesScreen';
import TabNavigationComponent from './TabNavigationComponent';

const Tab = createMaterialTopTabNavigator();

const TabNavigation: React.FC = () => {
  return (
    <>
      <Tab.Navigator
        tabBarPosition="bottom"
        tabBar={(props) => <TabNavigationComponent {...props} />}
        initialRouteName="Main">
        <Tab.Screen
          name="Main"
          options={{
            tabBarLabel: 'Spalanie',
          }}
          component={MainScreen}
        />
        <Tab.Screen
          name="Archive"
          options={{
            tabBarLabel: 'Archiwum',
          }}
          component={ArchiveScreen}
        />
        <Tab.Screen
          name="Notes"
          options={{
            tabBarLabel: 'Notatki',
          }}
          component={NotesScreen}
        />
        <Tab.Screen
          name="FixList"
          options={{
            tabBarLabel: 'Wymiany',
          }}
          component={FixListScreen}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigation;
