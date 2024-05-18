
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import styles from './styles';

interface Receta {
  name: string;
  ingredients: string[];
  image?: string;
}

const agregarRecetas: React.FC = () => {
  const [Receta, setReceta] = useState<Receta>({
    name: 'Frijoles Fritos',
    ingredients: ["frijoles", "aceite", "ceboya", ],
    image: '',
  });

  const handleAddIngredientes = (ingredientes: string) => {
    setReceta({
      ...receta,
      ingredients: [...Receta.ingredientes, ingredientes],
    });
  };

  const handleRemoveIngredientes = (index: number) => {
    const ingredients = [...Receta.ingredients];
    ingredients.splice(index, 1);
    setRecipe({
      <div styleName={styles.receta}>Recetas</div>,
      ingredients,
    });
  };

  const handleSaveReceta = () => {
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Receta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre de la receta"
        value={Receta.name}
        onChangeText={(text) => setReceta({ ...Receta, name: text })}
      />

      <View style={styles.ingredientsList}>
        {Receta.ingredients.map((ingredient, index) => (
          <View key={index} style={styles.ingredient}>
            <Text>{ingredient}</Text>
            <Button title="Eliminar" onPress={() => handleRemoveIngredient(index)} />
          </View>
        ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Agregar ingrediente"
        onSubmitEditing={(event) => handleAddIngredient(event.nativeEvent.text)}
      />

      <Button title="Guardar Receta" onPress={handleSaveReceta} />
    </View>
  );
};

export default agregaReceta;