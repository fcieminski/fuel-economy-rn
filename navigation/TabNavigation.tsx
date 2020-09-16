import React, { Dispatch } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import MainScreen from '../screens/MainScreen';
import AddButton from '../components/AddButton';
import { addFueling, openModal } from '../store/actions/fueling';
import { Fueling } from '../store/actions/types';
import { RootState } from '../store/store';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = ({ visible, modal }) => {
  const handlePress = () => {
    console.log('modal');
    modal(!visible);
    //working
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
      {visible && (
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

const mapStateToProps = (state: RootState) => {
  console.log(state);
  return {
    fueling: state.fueling.fuelingList,
    visible: state.fueling.modal,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    add: (fueling: Fueling) => dispatch(addFueling(fueling)),
    modal: (visible: boolean) => dispatch(openModal(visible)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabNavigation);
