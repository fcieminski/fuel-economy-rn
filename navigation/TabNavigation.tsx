import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import { Icon } from 'react-native-elements';
import MainScreen from '../screens/MainScreen';
import AddButton from '../components/AddButton';
import ArchiveScreen from '../screens/ArchiveScreen';
import FixListScreen from '../screens/FixListScreen';
import NotesScreen from '../screens/NotesScreen';

const Tab = createMaterialTopTabNavigator();

import { View, TouchableOpacity, Text } from 'react-native';

const MyTabBar: React.FC<MaterialTopTabBarProps> = ({
  state,
  descriptors,
  navigation,
  position,
}) => {
  const fixedState = [...state.routes];

  fixedState.splice(2, 0, { name: 'AddButton' });

  const first = () => {
    return fixedState.map((route, index) => {
      const info = descriptors[route.key];
      const label = info?.options.tabBarLabel;

      const isFocused = state.index === index;

      //working on focusing elements

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      };

      const onLongPress = () => {
        navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        });
      };

      return (
        <>
          {route.name === 'AddButton' ? (
            <AddButton state={state} />
          ) : (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: isFocused ? 'white' : 'black',
                }}>
                {info?.options.tabBarIcon()}
                <Text>{label}</Text>
              </View>
            </TouchableOpacity>
          )}
        </>
      );
    });
  };

  return <View style={{ flexDirection: 'row' }}>{first()}</View>;
};

const TabNavigation: React.FC = () => {
  return (
    <>
      <Tab.Navigator
        tabBarPosition="bottom"
        tabBar={(props) => <MyTabBar {...props} />}
        initialRouteName="Main">
        <Tab.Screen
          name="Main"
          options={{
            tabBarLabel: 'Spalanie',
            tabBarIcon() {
              return <Icon color="#32a899" type="material-community" name="gas-station" />;
            },
          }}
          component={MainScreen}
        />
        <Tab.Screen
          name="Archive"
          options={{
            tabBarLabel: 'Archiwum',
            tabBarIcon() {
              return <Icon color="#32a899" type="material-community" name="archive" />;
            },
          }}
          component={ArchiveScreen}
        />
        {/* <Tab.Screen
          name="Add"
          component={AddButton}
            options={{
              tabBarButton: () => <AddButton />,
            }}
        /> */}
        <Tab.Screen
          name="Notes"
          options={{
            tabBarLabel: 'Notatki',
            tabBarIcon() {
              return <Icon color="#32a899" type="material-community" name="note-text" />;
            },
          }}
          component={NotesScreen}
        />

        {/* <Tab.Screen
        name="CarChecks"
        options={{
          tabBarLabel: 'Przeglądy',
          tabBarIcon({ color }) {
            return <Icon color="#32a899" type="material-community" name="checkbox-marked-circle" />;
          },
        }}
        component={MainScreen}
      /> */}
        <Tab.Screen
          name="FixList"
          options={{
            tabBarLabel: 'Wymiany',
            tabBarIcon() {
              return <Icon color="#32a899" type="material-community" name="wrench" />;
            },
          }}
          component={FixListScreen}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigation;
