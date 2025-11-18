import { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity,TextInput} from "react-native";
import Checkbox from 'expo-checkbox';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from "expo-router";






export default function cadastro() {
  const [aceitouTermos, setAceitouTermos] = useState(false);
  const router = useRouter();
  return (
    
    <View style={styles.container}>


    

      <Text style={styles.title}>Cadastre-se</Text>
        <TouchableOpacity style={{position: 'absolute', top: 40, left: 20}} onPress={() => router.back()}>
        <MaterialIcons name="arrow-back" size={40} color={"#FFFFFF"}/>
        </TouchableOpacity>


         <View style={styles.containerinputs}>
             <TextInput placeholder="Nome" style={styles.input} />
             <TextInput placeholder="Email" style={styles.input} />
             <TextInput placeholder="Senha" style={styles.input} />
             <TextInput placeholder="Confirme sua senha" style={styles.input} />

        </View>
    

        <View style={styles.checkboxContainer}>
                <Checkbox
                      value={aceitouTermos}
                      onValueChange={setAceitouTermos}
                      color={aceitouTermos ? "#10B981" : undefined}
                 />
                    <Text style={styles.checkboxLabel}>Lembrar-me</Text>
        </View>

     

            <TouchableOpacity style={styles.button}>
                              <Text style={styles.buttonText}>REGISTRAR</Text>
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