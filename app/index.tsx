
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Inicial() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo</Text>

          <View style={styles.containerBarbearia}>
              <Image
               source={require("../assets/Barbearia.png")}
               style={styles.image}
               resizeMode="contain"
              />
           <Text style={{ fontSize: 24, fontFamily: "inter-bold",  }}>  Olá </Text>

            <Text style={{ fontSize: 14, fontFamily: "inter-light", marginTop: 30 }}>  Seja bem vindo ao aplicativo da nossa barbearia </Text>

           <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText} onPress={() => router.push('/login')}>Conectar-se</Text>
             </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText} onPress={() => router.push('/cadastro')}>Inscreva-se</Text>
             </TouchableOpacity>

          


            </View>
               
          </View>
          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#1E293B",
  },
  title: {
    fontSize: 50,
    color: "#FFFFFF",
    marginTop: 50,
    fontWeight: "bold",
  },
  containerBarbearia: {
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "#FFFFFF",
    width: '95%',
    height: '75%',
    borderRadius: 20,
  },
  image: {
    width: '90%',
    height: '70%',
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25,
    gap: 15,
  },
  button: {
    backgroundColor: "#059669",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20, 
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
