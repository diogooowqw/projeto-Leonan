import { useState } from "react";
import { StyleSheet, Text, View,TextInput } from "react-native";
import Cabecalhohorario from "../componentes/cabecalhohorario";
import DivBranca from "../componentes/divBranca";
import Etapas from "../componentes/etapas";
import ButtonVerde from "../componentes/buttonverde";



export default function agendarHorarioet4() {

    return (
        <View style={styles.container}>
            <Cabecalhohorario />


            <View style={styles.divBranca}>
                <Text style={styles.title}>Documentos</Text>
                    <Text style={styles.subtitle}>Preencha seus dados para finalizar o agendamento </Text>


                    <TextInput placeholder="Email" style={styles.input} />
                                             
                     <TextInput placeholder="Senha" style={styles.input} />


                     <ButtonVerde />

            </View>


            <View style={styles.containerResumo}>
               <Text style={styles.titleResumo}>Resumo do Agendamento</Text>
            </View>

        </View>

        
      
    );

    }


    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#1E293B",
         alignItems: "center",
        },

        divBranca: {
            width: "88%",
            height: "45%",
            backgroundColor: "#FFFFFF",
            marginTop: 20,
            borderRadius: 20,
            alignItems: "center",
        
        },
          title: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10,
        color: "#595959",
  
 
    },
       subtitle: {
        fontSize: 16,
        color: "#808080",
        marginTop: 5,
        fontWeight: "300",
        marginLeft:30,
    },
    input:{
     width: 300,
    height: 60,
    backgroundColor: "#EBEBEB",
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 20,
  },
   containerResumo: {
    width: "90%",
    height: "30%",
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    borderRadius: 20,
   },
   titleResumo: {
    fontSize: 20,
    fontWeight: "bold",
     marginTop: 10,
     color: "#595959",
     marginLeft:20,
   },
    });