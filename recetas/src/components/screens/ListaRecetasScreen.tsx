import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { agregarReceta } from '../componets02/agregarRecetas';
import { RecipeDetails } from '../componets02/detalleReceta';

const Stack = createStackNavigator();

const ListaRecetaScreen: React.FC = () => {
  const { recipes } = useContext(<Receta></Receta>Context);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('detalleReceta', { recetas: item })}>
      <Text style={styles.recetaItem}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={recipes}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.listContainer}
    />
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ListaRectas"
          component={ListaRecetasScreen}
          options={{
            title: 'Mis recetas',
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
          }}
        />
        <Stack.Screen name="detalleReceta" component={detalleRecetas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 20,
  },
  recipeItem: {
    fontSize: 18,
    marginBottom: 10,
  },
  headerStyle: {
    backgroundColor: '#f44336',
  },
  headerTitleStyle: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;