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




export default function servico() {

  return (
    <View style={styles.container}>

      <Cabecalhohorario />
   
       <Etapas Etapa1={1} Etapa2={2} />
        
    

           <DivBranca>
                <Text style={styles.title}>Escolha o serviço</Text>
                 <Text style={styles.subtitle}>Selecione o serviço que deseja agendar</Text>

                   <ButtonServiço>
                    <Text style={styles.buttonText}>Cabelo </Text>
                    <View style={styles.containerText}>   
                        <Text style={styles.buttonTime}>45min </Text>
                        <Text style={styles.buttonPreço}>R$40</Text>
                    </View>
                    
                    </ButtonServiço>
                   <ButtonServiço>
                       <Text style={styles.buttonText}>Cabelo e Barba</Text>
                       <View style={styles.containerText}>   
                        <Text style={styles.buttonTime}>45min </Text>
                        <Text style={styles.buttonPreço}>R$40</Text>
                    </View>
                    
                    </ButtonServiço>
                   <ButtonServiço>
                       <Text style={styles.buttonText}>Sobrancelha</Text>
                          <View style={styles.containerText}>   
                        <Text style={styles.buttonTime}>45min </Text>
                        <Text style={styles.buttonPreço}>R$40</Text>
                    </View>
                    
                    </ButtonServiço>
                   <ButtonServiço>
                       <Text style={styles.buttonText}>Rapar o saco</Text>
                        <View style={styles.containerText}>   
                        <Text style={styles.buttonTime}>45min </Text>
                        <Text style={styles.buttonPreço}>R$40</Text>
                    </View>
                    
                    </ButtonServiço>    

                    <ButtonVerde onPress={() => router.push('/agendarHorarioEt2')}/>
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
  buttonText: {
    fontSize: 25,
    color: "#1E293B",
    fontWeight: "800",
    marginLeft:10,
  },
  buttonTime:{
    fontSize: 18,
    color: "#626262ff", 
    fontWeight: "600",
  },
  buttonPreço:{
    fontSize: 18,
    fontWeight: "600",
    color: "#059669",
  } ,
  containerText:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:"70%",
    marginTop:5,
    marginLeft:20,
  }
});