import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from "react";   
import Cabecalhohorario from "../componentes/cabecalhohorario";
import DivBranca from "../componentes/divBranca";
import Etapas from "../componentes/etapas";
import ButtonSelecionar from "../componentes/buttonSelecionar";
import ButtonVerde from "../componentes/buttonverde";
import { Button } from "@react-navigation/elements";





export default function agendarHorarioet2() {

  return (
    <View style={styles.container}>
        <Cabecalhohorario />

         <Etapas Etapa1={3} Etapa2={4} />

            <DivBranca>
                 <Text style={styles.title}>Escolha a data e hora</Text>
                 <Text style={styles.subtitle}>Selecione a data e hora que deseja agendar</Text>
            </DivBranca>
         </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E293B",
    alignItems: "center",
  
  },
    title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    color: "#595959",
  },
    subtitle:{
    fontSize: 16,
    color: "#808080",
    marginTop: 5,
    fontWeight: "300",
    marginBottom:10,  
  },
});