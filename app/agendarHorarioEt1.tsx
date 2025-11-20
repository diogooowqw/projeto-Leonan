import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonSelecionar from "../componentes/buttonSelecionar";
import ButtonVerde from "../componentes/buttonverde";
import Cabecalhohorario from "../componentes/cabecalhohorario";
import DivBranca from "../componentes/divBranca";
import Etapas from "../componentes/etapas";

export default function servico() {
  const [valor, setValor] = useState<any>(null);//termina de pegar os valores dos dados para enviar para o local estorage
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handlePress = (dados: any) => {
    setValor(dados);
    setSelectedId((prev) => (prev === dados.id ? null : dados.id)); 
    console.log("Botão pressionado:", dados);
  };

  return (
    <View style={styles.container}>//conclui a animation dos buttons 
      <Cabecalhohorario />
       <Etapas Etapa1={1} Etapa2={2} />

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
               <Text style={styles.buttonPreço}>R$40</Text>
            </View>
        </ButtonSelecionar>

        <ButtonSelecionar
          dados={{ id: 3, nome: "Cabelo e Barba", preco: 60 }}
          selecionado={selectedId === 3}
          onPress={(d) => handlePress(d)}
        >
          <Text style={styles.buttonText}>Cabelo e Barba</Text>
              <View style={styles.containerText}>
                 <Text style={styles.buttonTime}>60min </Text>
                 <Text style={styles.buttonPreço}>R$60</Text>
              </View>
        </ButtonSelecionar>

        <ButtonSelecionar
          dados={{ id: 4, nome: "Sobrancelha", preco: 25 }}
          selecionado={selectedId === 4}
          onPress={(d) => handlePress(d)}
        >
          <Text style={styles.buttonText}>Sobrancelha</Text>
                <View style={styles.containerText}>
                   <Text style={styles.buttonTime}>30min </Text>
                  <Text style={styles.buttonPreço}>R$25</Text>
               </View>
         </ButtonSelecionar>

        <ButtonSelecionar
          dados={{ id: 5, nome: "Rapar o saco", preco: 40 }}
          selecionado={selectedId === 5}
          onPress={(d) => handlePress(d)}
        >
          <Text style={styles.buttonText}>Rapar o saco</Text>
          <View style={styles.containerText}>
            <Text style={styles.buttonTime}>45min </Text>
            <Text style={styles.buttonPreço}>R$40</Text>
          </View>
        </ButtonSelecionar>

        <ButtonVerde onPress={() => router.push("/agendarHorarioEt2")} />/tem que colocar para continar somente qunado um button for escolhido blz
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