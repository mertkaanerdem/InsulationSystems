import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomePage, SumApp, MinusApp, TimesApp, DivideApp} from './pages';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          options={{animationEnabled: true}}
          name="Home"
          component={HomePage}
        />
        <Stack.Screen name="Sum" component={SumApp} />
        <Stack.Screen name="Minus" component={MinusApp} />
        <Stack.Screen name="Times" component={TimesApp} />
        <Stack.Screen name="Divide" component={DivideApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
