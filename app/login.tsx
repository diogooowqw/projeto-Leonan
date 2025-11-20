import {Text, View, StyleSheet, TextInput, TouchableOpacity, Alert} from "react-native";
import { router } from "expo-router";
import { useState,useEffect } from "react";   
import { MaterialIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';






export default function Login() {
      const [aceitouTermos, setAceitouTermos] = useState(false);
     const[email, setEmail] = useState("");
     const[senha, setSenha] = useState("");
     const [mostrarSenha, setMostrarSenha] = useState(false);






        const verificarLogin = async () => {
            try {
                const lista = await AsyncStorage.getItem('usuarios');
                const usuarios = lista ? JSON.parse(lista) : [];
                 const usuarioEncontrado = usuarios.find((u: any) => u.email === email && u.senha === senha);
                
                if (usuarioEncontrado) {
                    router.replace('/inicial');
                }
                else{
                    Alert.alert('Erro', 'Email ou senha incorretos.');
                }
            } catch (error) {
                console.log('Erro ao verificar o login:', error);
            }
        };


    return(
        <View style={styles.container}>

          <Text style={styles.title}>Login</Text>

                 <TouchableOpacity  style={{position: 'absolute', top: 40, left: 20}} onPress={() => router.back()}>
                     <MaterialIcons name="arrow-back" size={40} color={"#FFFFFF"}/>
                </TouchableOpacity>

               


           
                          <View style={{marginTop: 70}}/>
                        
                          <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />

                         <View>
                               <TextInput placeholder="Senha" style={styles.input} value={senha} onChangeText={setSenha} secureTextEntry={!mostrarSenha} />

                               <TouchableOpacity style={styles.icon} onPress={() => setMostrarSenha(!mostrarSenha)}>
                                   <MaterialIcons name={mostrarSenha ? "visibility" : "visibility-off"} size={24} color="gray" />
                               </TouchableOpacity>


                         </View>
                       

                         
                         


                      <TouchableOpacity style={styles.button}>
                                                  <Text style={styles.buttonText} onPress={() => verificarLogin()}>ENTRAR</Text>
                     </TouchableOpacity>
        </View>
 
    );
}   

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: "#FFFFFF",
    marginTop: 150,
    fontWeight: "bold",
  },
    container: {
    flex: 1,
    backgroundColor: "#1E293B",
    alignItems: "center",

  },
  
  text:{
   fontSize: 20,
   marginTop: 30,
  },
  input:{
     width: 300,
    height: 60,
    backgroundColor: "#ffffffff",
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 20,
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
    fontWeight: "bold",
  },
    icon: {
    position: "absolute",
    right: 10,
    top: 35,
  },

});