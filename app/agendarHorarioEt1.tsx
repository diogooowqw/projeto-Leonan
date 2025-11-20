import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View,Alert } from "react-native";
import ButtonSelecionar from "../componentes/buttonSelecionar";
import ButtonVerde from "../componentes/buttonverde";
import Cabecalhohorario from "../componentes/cabecalhohorario";
import DivBranca from "../componentes/divBranca";
import Etapas from "../componentes/etapas";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function servico() {
  const [valor, setValor] = useState<any>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const salvardadosStorage = async() => {
   
    

    try{
     const  dadosServico = {
        servico: valor,
      };
      if(valor){
        await AsyncStorage.setItem('dadosServico', JSON.stringify(dadosServico) );
       console.log('Dados do serviço salvos!', dadosServico);
       router.navigate('/agendarHorarioEt2');
      }
       else {
            Alert.alert('Erro', 'Nenhum serviço selecionado para salvar.');
       }

    }
   
      
    
    catch(error){
      console.log('Erro ao salvar os dados:', error);
    }
  };


  const handlePress = (dados: any) => {
     setSelectedId((prev)=> {
      if (prev === dados.id) {
        setValor(null);
        return null;
     }
    
     else{
          setValor(dados);
          return dados.id;
     }
     });

    console.log("Botão pressionado:", dados);
  };

 


  return (
    <View style={styles.container}>
      <Cabecalhohorario />
       <Etapas Etapa1={1} Etapa2={2} tuboMeioAtivo={!!selectedId}/>

      <DivBranca>
        <Text style={styles.title}>Escolha o serviço</Text>
        <Text style={styles.subtitle}>Selecione o serviço que deseja agendar</Text>

        <ButtonSelecionar
          dados={{ id: 2, nome: "Cabelo", preco: 40 }}
          selecionado={selectedId === 2}
          onPress={(d) => handlePress(d)}
        >

          <Text style={styles.buttonText}>Cabelo </Text>

             <View style={styles.containerText}>
               <Text style={styles.buttonTime}>45min </Text>
               <Text style={styles.buttonPreço}>R$30</Text>
            </View>
        </ButtonSelecionar>

        <ButtonSelecionar
          dados={{ id: 3, nome: "Cabelo e Barba", preco: 60 }}
          selecionado={selectedId === 3}
          onPress={(d) => handlePress(d)}
        >
          <Text style={styles.buttonText}>Cabelo e Barba</Text>
              <View style={styles.containerText}>
                 <Text style={styles.buttonTime}>50min </Text>
                 <Text style={styles.buttonPreço}>R$75</Text>
              </View>
        </ButtonSelecionar>

        <ButtonSelecionar
          dados={{ id: 4, nome: "Sobrancelha", preco: 25 }}
          selecionado={selectedId === 4}
          onPress={(d) => handlePress(d)}
        >
          <Text style={styles.buttonText}>Sobrancelha</Text>
                <View style={styles.containerText}>
                   <Text style={styles.buttonTime}>10min </Text>
                  <Text style={styles.buttonPreço}>R$10</Text>
               </View>
         </ButtonSelecionar>

        <ButtonSelecionar
          dados={{ id: 5, nome: "Rapar o saco", preco: 40 }}
          selecionado={selectedId === 5}
          onPress={(d) => handlePress(d)}
        >
          <Text style={styles.buttonText}>Barba</Text>
          <View style={styles.containerText}>
            <Text style={styles.buttonTime}>20min </Text>
            <Text style={styles.buttonPreço}>R$45</Text>
          </View>
        </ButtonSelecionar>

        <ButtonVerde onPress={() => { salvardadosStorage();}}  />
      </DivBranca>
    </View>
  );//tem que colocar para continuar somente quando um button for escolhido blz
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
  subtitle: {
    fontSize: 16,
    color: "#808080",
    marginTop: 5,
    fontWeight: "300",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 25,
    color: "#1E293B",
    fontWeight: "800",
    marginLeft: 10,
  },
  buttonTime: {
    fontSize: 18,
    color: "#626262",
    fontWeight: "600",
  },
  buttonPreço: {
    fontSize: 18,
    fontWeight: "600",
    color: "#059669",
  },
  containerText: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    marginTop: 5,
    marginLeft: 20,
  },
});