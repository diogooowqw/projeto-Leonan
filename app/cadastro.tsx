import { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity,TextInput} from "react-native";
import Checkbox from 'expo-checkbox';



export default function Login() {
  const [aceitouTermos, setAceitouTermos] = useState(false);
  return (
    
    <View style={styles.container}>

      <Text style={styles.title}>Cadastre-se</Text>



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
                    <Text style={styles.checkboxLabel}>Aceito os termos de uso</Text>
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
    marginTop: 70,
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