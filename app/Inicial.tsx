
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from "react";   



export default function Inicial() {

  return (
    <View style={styles.container}>

            <View style={styles.cabecalho} > 
                <View style={styles.icone}>
                    <MaterialIcons name="content-cut" size={40} color={"#FFFFFF"}/>
                </View>


                <Text style={styles.title}>
                    Barbearia {"\n"}Elite
                     {"\n"}
                  <Text style={{ fontWeight: "200" ,fontSize: 20}}>Tradição & Estilo</Text>
                </Text>
               
             </View>

              <Text style={styles.title2}>
                  Seu estilo,
                   {"\n"}
                   <Text style={{ color: "#79FFD3" }}>nossa</Text>
                   {"\n"}
                   <Text style={{ color: "#79FFD3" }}>Arte</Text>
              </Text>

              <Text style={styles.title3}>Transformamos cada corte em
                 uma obra.
                   {"\n"}
                 Agende online e
                   {"\n"}
                experimente o melhor da
                  {"\n"}
                barbearia
                  {"\n"}
                tradicional com toque moderno.
                </Text>


                  <TouchableOpacity style={styles.button}>
                          <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <MaterialIcons name="calendar-today" size={20} color="#fff" style={{ marginRight: 20}} />
                                  <Text style={styles.buttonText} onPress={() => router.navigate('/agendarHorarioEt1')}>
                                  Agendar Agora
                              </Text>
                          </View>
                      </TouchableOpacity>

                       <TouchableOpacity style={styles.buttonWtsap}>
                          <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <MaterialIcons name="headphones" size={20} color="#fff" style={{ marginRight: 20 }} />
                                  <Text style={styles.buttonText} onPress={() => router.navigate('/inicial')}>
                                  WhatsApp
                              </Text>
                          </View>
                      </TouchableOpacity>
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
  cabecalho:{
    marginTop:-20,
    backgroundColor:"#fff",
    width:"110%",
    height:"18%",
    alignItems:"center",
    flexDirection:"row",

  },
  title:{
    fontSize: 33,
    color: "#475569",
    fontWeight: "bold",
    marginTop:20,
  },

  title2:{
    fontSize: 50,
    color: "#ffffffff",
    fontWeight: "bold",
    marginTop:40,
    marginRight:110,
  },
  title3:{
    fontSize: 20,
    color: "#FFFFFF",
    marginTop:40,
    fontWeight: "300",

  },
  icone:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#059669",
    width:60,
    height:60,
    marginLeft:20,
    borderRadius:15,
    marginRight:30,
  },
  
  button: {
    backgroundColor: "#059669",
    paddingVertical: 20,
    paddingHorizontal: 35,
    borderRadius: 8,
    marginTop: 40,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
   fontWeight: "bold",
  },
    buttonWtsap: {
    borderColor: "#ffff",
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 53,
    borderRadius: 8,
    marginTop: 10,
  },
  icon: {
    marginRight: 15,
  },

});
