import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { agregarRecetas } from './src/components/componets02/agregarRecetas';
import { detalleReceta } from './src/components/componets02/detalleReceta';
import { listaRecetas } from './src/components/componets02/listaRecetas';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaRecetas">
        <Stack.Screen name="agregarRecetas" component={agregarRecetas} />
        <Stack.Screen name="detalleReceta" component={detalleReceta} />
        <Stack.Screen name="listaRecetas" component={listaRecetas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



