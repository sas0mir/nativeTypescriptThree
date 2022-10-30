import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Text } from 'react-native';
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Icon } from '@rneui/themed';
import Settings from "./screens/Settings";
import Home from "./screens/Home";
import CanvasPage from './screens/CanvasPage';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
      <>
          <StatusBar style="auto" />
          <NavigationContainer>
              <Tab.Navigator screenOptions={({route}) => ({
                  headerShown: false,
                  tabBarIcon: ({focused, color, size}) => {
                      let iconName: string = 'settings';
                      if (route.name == 'Home') {
                          iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                      } else if (route.name === 'Settings') {
                          iconName = focused ? 'settings' : 'settings-outline';
                      } else if (route.name === 'Canvas') {
                        iconName = 'game-controller-outline';
                      }
                      return <Icon name={iconName} color="color" type="ionicon"/>//<Ionicons name={iconName} color={color} size={size} />
                  },
                  tabBarActiveTintColor: '#00ff00',
                  tabBarInactiveTintColor: '#ff0000',
              })}
              initialRouteName="Home">
                  <Tab.Screen name="Home" component={Home} options={{tabBarBadge: 3}} />
                  <Tab.Screen name="Canvas" component={CanvasPage}/>
                  <Tab.Screen name="Settings" component={Settings} />
              </Tab.Navigator>
          </NavigationContainer>
      </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 16,
      backgroundColor: '#1e085a'
  },
  listContainer: {
      flex: 4,
  },
});
