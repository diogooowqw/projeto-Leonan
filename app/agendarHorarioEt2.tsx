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

         <Etapas Etapa1={2} Etapa2={3} />
      
         <DivBranca>
          <Text style={styles.title}>Escolha o profissonal</Text>
          <Text style={styles.subtitle}>Selecione o barbeiro da sua preferência</Text>

             <ButtonSelecionar>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialIcons name="person" size={35} color="#1E293B" />     

                        <Text style={styles.buttonTitle}>Eltin Dos Cortes</Text>

                </View>
                          <Text style={styles.buttonSubtitle}>Mestre dos Riscos</Text>

             </ButtonSelecionar>

               <ButtonSelecionar>
                     <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialIcons name="person" size={35} color="#1E293B" />     

                        <Text style={styles.buttonTitle}>Kaellzadas</Text>

                </View>      
                       <Text style={styles.buttonSubtitle}>Corte caça rato</Text>

             </ButtonSelecionar>


               <ButtonSelecionar>
                     <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialIcons name="person" size={35} color="#1E293B" />     

                        <Text style={styles.buttonTitle}>Dioguin</Text>
            
                </View>     
                     <Text style={styles.buttonSubtitle}>Farmador de Aura</Text>

             </ButtonSelecionar>

               <ButtonSelecionar>
                     <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialIcons name="person" size={35} color="#1E293B" />     

                        <Text style={styles.buttonTitle}>Luisin</Text>

                </View>     
                        <Text style={styles.buttonSubtitle}>Mister rapa saco</Text>

             </ButtonSelecionar>
            
                <ButtonVerde onPress={() => router.push('/agendarHorarioEt3')}/>
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
  buttonTitle:{
    fontSize:20,
    fontWeight:"600",
    color:"#1E293B",
    marginLeft:10,
  },
  buttonSubtitle:{
    fontSize:16,
    color:"#626262ff", 
      fontWeight: "300",
      marginLeft:15,
      marginTop:5,
  },
});