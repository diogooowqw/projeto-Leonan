import { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import Checkbox from 'expo-checkbox';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";






export default function cadastro() {
  const [aceitouTermos, setAceitouTermos] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmeSenha, setConfirmeSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmeSenha, setMostrarConfirmeSenha] = useState(false);



  const salvarUsuario = async () => {
    try {
      const usuario = {
        nome,
        email,
        senha,
      };

      const lista = await AsyncStorage.getItem('usuarios');
      let usuarios = lista ? JSON.parse(lista) : [];

      usuarios.push(usuario);

      await AsyncStorage.setItem('usuarios', JSON.stringify(usuarios));
      console.log('Usuário salvo com sucesso!', usuario);
    } catch (error) {
      console.log('Erro ao salvar o usuário:', error);
    }
  }
  const router = useRouter();

  const isValid =
    nome.trim() !== "" &&
    email.trim() !== "" &&
    senha.trim() !== "" &&
    confirmeSenha.trim() !== "" &&
    senha === confirmeSenha &&
    aceitouTermos;



  return (

    <View style={styles.container}>




      <Text style={styles.title}>Cadastre-se</Text>
      <TouchableOpacity style={{ position: 'absolute', top: 40, left: 20 }} onPress={() => router.back()}>
        <MaterialIcons name="arrow-back" size={40} color={"#FFFFFF"} />
      </TouchableOpacity>


      <View style={styles.containerinputs}>
        <TextInput placeholder="Nome" style={styles.input} value={nome} onChangeText={setNome} />

        <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />


        <View >
          <TextInput placeholder="Senha" style={styles.input} value={senha} onChangeText={setSenha} secureTextEntry={!mostrarSenha} />

          <TouchableOpacity style={styles.icon} onPress={() => setMostrarSenha(!mostrarSenha)}>

            <MaterialIcons name={mostrarSenha ? "visibility" : "visibility-off"} size={24} color="gray" />

          </TouchableOpacity>
        </View>

        <View>
          <TextInput placeholder="Confirme sua senha" style={styles.input} value={confirmeSenha} onChangeText={setConfirmeSenha} secureTextEntry={!mostrarConfirmeSenha} />

          <TouchableOpacity style={styles.icon} onPress={() => setMostrarConfirmeSenha(!mostrarConfirmeSenha)}>


            <MaterialIcons name={mostrarConfirmeSenha ? "visibility" : "visibility-off"} size={24} color="gray" />

          </TouchableOpacity>
        </View>

      </View>


      <View style={styles.checkboxContainer}>
        <Checkbox
          value={aceitouTermos}
          onValueChange={setAceitouTermos}
          color={aceitouTermos ? "#10B981" : undefined}
        />
        <Text style={styles.checkboxLabel}>Termos de uso</Text>
      </View>



      <TouchableOpacity style={[styles.button, !isValid && { backgroundColor: "#4B5563" }]} disabled={!isValid} onPress={() => { salvarUsuario(); router.replace('/') }}>
        <Text style={styles.buttonText} >REGISTRAR</Text>
      </TouchableOpacity>


    </View>



  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

    backgroundColor: "#1E293B",
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 18,
  },

  title: {
    fontSize: 50,
    color: "#FFFFFF",
    marginTop: 90,
    fontWeight: "bold",
  },

  containerinputs: {
    marginTop: 80,

  },
  input: {
    width: 300,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 5,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  checkboxLabel: {
    color: "#FFFFFF",
    marginLeft: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#059669",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 60,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "inter-ultrabold",
  },
});