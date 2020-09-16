import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { openModal } from '../store/actions/fuelling';
import MainScreen from '../screens/MainScreen';
import AddButton from '../components/AddButton';
import Modal from '../components/Modal';
import AddFuellingInputs from '../components/inputs/AddFuellingInputs';
import { Fuelling } from '../store/actions/types';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  const modalToggle = useSelector<RootState, boolean>((state: RootState) => state.fuelling.modal);
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(openModal(!modalToggle));
  };

  const saveElement = (fuelling: Fuelling) => {
    Object.values(fuelling);
  };

  return (
    <>
      <Modal visible={modalToggle} toggle={handlePress}>
        <AddFuellingInputs handleSave={saveElement} />
      </Modal>
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
    </>
  );
};

export default TabNavigation;
