import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Iniciar sesión</Text>
      <TextInput label="Correo" value={email} onChangeText={setEmail} />
      <TextInput label="Contraseña" secureTextEntry value={password} onChangeText={setPassword} />
      <Button mode="contained" onPress={login} style={{ marginTop: 20 }}>Ingresar</Button>
      <Button onPress={() => navigation.navigate('Register')} style={{ marginTop: 10 }}>¿No tienes cuenta? Regístrate</Button>
    </View>
  );
}
