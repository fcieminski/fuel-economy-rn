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
import { readStorage, saveToStorage } from '../components/utils/storageUtils';
import ArchiveScreen from '../screens/ArchiveScreen';
import FixListScreen from '../screens/FixListScreen';
import NotesScreen from '../screens/NotesScreen';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  const modalToggle = useSelector<RootState, boolean>((state: RootState) => state.fuelling.modal);
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(openModal(!modalToggle));
  };

  const saveFuellingElement = async (fuelling: Record<string, string>) => {
    const parsedFuelling: Fuelling = parseFuellingElement(fuelling);
    const storageData = await readStorage('@fuelling');
    const mergedData = storageData ? [...storageData, parsedFuelling] : [parsedFuelling];
    await saveToStorage('@fuelling', mergedData);
    dispatch(addFuelling(parsedFuelling));
    dispatch(openModal(!modalToggle));
  };

  const parseFuellingElement = (fuelling: Record<string, string>): Fuelling => {
    const cost = parseFloat(fuelling.cost);
    const distance = parseFloat(fuelling.distance);
    const fuelAmount = parseFloat(fuelling.fuelAmount);
    const timestamp = parseFloat(fuelling.timestamp);
    console.log(timestamp, 'save');
    return {
      cost,
      distance,
      fuelAmount,
      date: fuelling.date,
      timestamp,
    };
  };

  return (
    <>
      <Modal visible={modalToggle} toggle={handlePress} title="Dodaj ostatnie tankowanie">
        <AddFuellingInputs handleSubmit={saveFuellingElement} />
      </Modal>
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
