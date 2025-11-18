import {Text, View, StyleSheet, TextInput, TouchableOpacity, Alert} from "react-native";
import { router } from "expo-router";
import { useState } from "react";   
import { MaterialIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';






export default function Login() {
      const [aceitouTermos, setAceitouTermos] = useState(false);
    return(
        <View style={styles.container}>

          <Text style={styles.title}>Login</Text>

                 <TouchableOpacity  style={{position: 'absolute', top: 40, left: 20}} onPress={() => router.back()}>
                     <MaterialIcons name="arrow-back" size={40} color={"#FFFFFF"}/>
                </TouchableOpacity>

               


           
                          <View style={{marginTop: 70}}/>
                        
                          <TextInput placeholder="Email" style={styles.input} />
                         
                         <TextInput placeholder="Senha" style={styles.input} />


                          <View style={styles.checkboxContainer}>
                                         <Checkbox
                                               value={aceitouTermos}
                                               onValueChange={setAceitouTermos}
                                               color={aceitouTermos ? "#10B981" : undefined}
                                          />
                                             <Text style={styles.checkboxLabel}>Aceito os termos de uso</Text>
                                 </View>
                         


                      <TouchableOpacity style={styles.button}>
                                                  <Text style={styles.buttonText} onPress={() => router.navigate('/inicial')}>ENTRAR</Text>
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
    fontFamily: "inter-ultrabold",
  },

});