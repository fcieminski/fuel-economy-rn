import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import MainScreen from '../screens/MainScreen';
import AddButton from '../components/AddButton';
import { RootState } from '../store/store';
import { openModal } from '../store/actions/fueling';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  const modal = useSelector<RootState, boolean>((state: RootState) => state.fueling.modal);
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(openModal(!modal));
    console.log(modal);
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        activeBackgroundColor: '#32a899',
        inactiveTintColor: '#346358',
        labelStyle: { fontSize: 14 },
        style: {
          backgroundColor: '#e3e3e3',
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
      {modal && (
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
      )}
      <Tab.Screen
        name="Add"
        component={AddButton}
        options={{
          tabBarButton: () => <AddButton addElement={handlePress} />,
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
        component={MainScreen}
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
        component={MainScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
