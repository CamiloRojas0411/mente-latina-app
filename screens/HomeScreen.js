import React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Bienvenido a MenteLatina</Text>
      <Text style={{ marginTop: 10 }}>
        Aquí podrás conectar con profesionales de salud mental en tu idioma.
      </Text>
    </View>
  );
}
