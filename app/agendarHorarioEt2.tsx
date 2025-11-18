import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from "react";   
import Cabecalhohorario from "../componentes/cabecalhohorario";
import DivBranca from "../componentes/divBranca";
import Etapas from "../componentes/etapas";
import ButtonServiço from "../componentes/buttonSelecionar";
import ButtonVerde from "../componentes/buttonverde";
import { Button } from "@react-navigation/elements";






export default function agendarHorarioet2() {

  return (

    <View style={styles.container}>

        <Cabecalhohorario />

         <Etapas Etapa1={2} Etapa2={3} />
      

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