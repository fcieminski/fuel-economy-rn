import React, { Fragment, useCallback } from 'react';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { Text, View, TouchableOpacity } from 'react-native';
import AddButton from '../components/AddButton';
import { Icon } from 'react-native-elements';

const TabNavigationComponent: React.FC<MaterialTopTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const fixedState = [...state.routes];
  fixedState.splice(2, 0, { name: 'AddButton', key: 'addButton' });

  const GenerateButtons = useCallback(() => {
    return (
      <>
        {fixedState.map((route, index) => {
          const info = descriptors[route.key];
          const label = info ? info.options.tabBarLabel : '';

          const icons: Record<number, string> = {
            0: 'gas-station',
            1: 'archive',
            2: '',
            3: 'note-text',
            4: 'wrench',
          };

          const focusedElement: Record<number, boolean> = {
            0: state.index === 0,
            1: state.index === 1,
            2: false,
            3: state.index === 2,
            4: state.index === 3,
          };

          const isFocused: boolean = focusedElement[index];

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
            <Fragment key={route.key}>
              {route.name === 'AddButton' ? (
                <AddButton state={state} />
              ) : (
                <TouchableOpacity
                  accessibilityRole="button"
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={{ flex: 1 }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: isFocused ? 'gray' : 'white',
                      height: '100%',
                    }}>
                    <Icon color="#32a899" type="material-community" name={icons[index]} />
                    <Text>{label}</Text>
                  </View>
                </TouchableOpacity>
              )}
            </Fragment>
          );
        })}
      </>
    );
  }, [state.index]);

  return (
    <View style={{ flexDirection: 'row', height: 50 }}>
      <GenerateButtons />
    </View>
  );
};

export default TabNavigationComponent;
