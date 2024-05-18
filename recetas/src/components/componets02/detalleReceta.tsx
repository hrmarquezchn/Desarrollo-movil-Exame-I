import React from 'react';
import { View, Text } from 'react-native';
import { usedetalleRecetaContext } from '../componets02/detalleReceta';

const RecipeDetailsScreen = ({ route }) => {
  const { id } = route.params;
  const { recipes } = usedetalleRecetaContext();
  const recipe = recipes.find((receta) => receta.id === id);

  return (
    <View>
      <Text>{receta.name}</Text>
      <Text>{receta.ingredients}</Text>
    </View>
  );
};

export default detalleRecetaScreen;