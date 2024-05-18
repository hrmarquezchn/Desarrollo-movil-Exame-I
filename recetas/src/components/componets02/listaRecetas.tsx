import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { agregarRecetasContext } from '../componets02/agregarRecetasContext';
import { RecipedetalleReceta } from '../componets02/detalleReceta';

const Stack = createStackNavigator();

const RecipeList: React.FC = () => {
  const { recipes } = useContext(<Receta></Receta>Context);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('RecipeDetails', { receta: item })}>
      <Text style={styles.recipeItem}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={receta}
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
          name="listaRecetas"
          component={listaRecetas}
          options={{
            title: 'Mis recetas',
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
          }}
        />
        <Stack.Screen name="RecipeDetails" component={listaRecetas} />
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