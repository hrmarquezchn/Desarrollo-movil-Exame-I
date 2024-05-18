import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { usedetalleRecetaContext } from '../componets02/detalleReceta';
import * as ImagePicker from 'expo-image-picker';

const detalleRecetas: React.FC<{ recipe: any }> = ({ recipe }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe.name}</Text>
      <Text style={styles.ingredientsLabel}>Ingredientes:</Text>
      <Text style={styles.ingredients}>{recipe.ingredients}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ingredientsLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ingredients: {
    fontSize: 16,
  },
});
