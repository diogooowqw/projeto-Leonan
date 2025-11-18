import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from "react";   
import Cabecalhohorario from "../componentes/cabecalhohorario";
import DivBranca from "../componentes/divBranca";
import Etapas from "../componentes/etapas";



export default function servico() {

  return (
    <View style={styles.container}>

      <Cabecalhohorario />
   
       <Etapas />

        <DivBranca  />

    </View>
    );


  } 



  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E293B",
    alignItems: "center",
  
  },
});