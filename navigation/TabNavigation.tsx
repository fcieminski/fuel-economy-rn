import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addFuelling, openModal } from '../store/actions/fuelling';
import MainScreen from '../screens/MainScreen';
import AddButton from '../components/AddButton';
import Modal from '../components/Modal';
import AddFuellingInputs from '../components/inputs/AddFuellingInputs';
import { Fuelling } from '../types/fuellingHistoryTypes';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  const modalToggle = useSelector<RootState, boolean>((state: RootState) => state.fuelling.modal);
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(openModal(!modalToggle));
  };

  const saveFuelingElement = (fuelling: {
    cost: string;
    distance: string;
    fuelAmount: string;
    date: string;
  }) => {
    const cost = parseFloat(fuelling.cost);
    const distance = parseFloat(fuelling.distance);
    const fuelAmount = parseFloat(fuelling.fuelAmount);
    const parsedFuelling: Fuelling = {
      ...fuelling,
      cost,
      distance,
      fuelAmount,
    };
    dispatch(addFuelling(parsedFuelling));
    dispatch(openModal(!modalToggle));
  };

  return (
    <>
      <Modal visible={modalToggle} toggle={handlePress}>
        <AddFuellingInputs handleSubmit={saveFuelingElement} />
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
