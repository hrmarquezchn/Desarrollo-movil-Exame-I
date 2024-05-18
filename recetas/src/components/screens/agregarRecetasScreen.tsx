import React from 'react';
import { useNavigation } from '@react-navigation/native';
import agregarRecetas from '../componets02/agregarRecetas.component';

const agregarRecetasScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleSaveRecipe = () => {
    
    navigation.navigate('listaRecetas');
  };

  return (
    <agregarRecetas onSaveRecetas={handleSaveRecetas} />
  );
};

export default agregarRecetasScreen;
