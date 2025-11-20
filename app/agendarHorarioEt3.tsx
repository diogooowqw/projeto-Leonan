import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Cabecalhohorario from "../componentes/cabecalhohorario";
import DivBranca from "../componentes/divBranca";
import Etapas from "../componentes/etapas";
import ButtonVerde from "../componentes/buttonverde";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from "@react-native-picker/picker";
import { Calendar } from "react-native-calendars";
import { router } from "expo-router";







export default function agendarHorarioet2() {
  const [selected, setSelected] = useState<string>("");
   const [opcao, setOpcao] = useState("");



   const salvardadosStorage = async() => {

    try{
            const dataEHora = {
                data: selected,
                hora: opcao,
            };
            
        if(selected && opcao){
        
            await AsyncStorage.setItem('dadosDataHora', JSON.stringify(dataEHora) );
            console.log('Data e hora salvos!', dataEHora);
            router.navigate('/agendarHorarioEt4');
        }
        else{
            Alert.alert('Erro', 'Data ou hora não selecionada para salvar.');
        }
    }
    catch(error){
        console.log('Erro ao salvar os dados:', error);
    }
   }

  return (
    <View style={styles.container}>
        <Cabecalhohorario />

         <Etapas Etapa1={3} Etapa2={4} tuboMeioAtivo={!!selected} />

            <DivBranca>
                <Text style={styles.title}>Escolha a data e hora</Text>
                <Text style={styles.subtitle}>Selecione a data e hora que deseja agendar</Text>

                <View style={{ transform: [{ scale: 0.8 }], alignSelf: "center",marginTop: -20,marginBottom:-20 }}>
                    <Calendar
                        current={new Date().toISOString().split("T")[0]}
                        onDayPress={(day) => {
                            setSelected(day.dateString);
                        }}
                        markedDates={{
                            [selected]: {
                                selected: true,
                                selectedColor: "#059BE7",
                                selectedTextColor: "#fff",
                            },
                        }}
                        theme={{
                            textSectionTitleColor: "#9aa0a6",
                            dayTextColor: "#000",
                            todayTextColor: "#059BE7",
                            selectedDayBackgroundColor: "#059BE7",
                            selectedDayTextColor: "#fff",
                            textDayHeaderFontWeight: "bold",
                            monthTextColor: "#000",
                            arrowColor: "#059BE7",
                        }}
                    />
                </View>

                <Text style={styles.titleHorario}>Horário  </Text>

                <View style={styles.pickerContainer}>
                  <Picker selectedValue={opcao} onValueChange={(itemValue) => setOpcao(itemValue)}style={styles.picker} >
                    <Picker.Item label="Horários Disponíveis" value="" />
                    <Picker.Item label="8:00" value="8:00" />
                    <Picker.Item label="9:00" value="9:00" />
                    <Picker.Item label="10:00" value="10:00" />
                    <Picker.Item label="11:00" value="11:00" />
                    <Picker.Item label="12:00" value="12:00" />
                    <Picker.Item label="13:00" value="13:00" />
                    <Picker.Item label="14:00" value="14:00" />
                    <Picker.Item label="15:00" value="15:00" />
                    <Picker.Item label="16:00" value="16:00" />
                    <Picker.Item label="17:00" value="17:00" />
                  </Picker>
                </View>
             
               <ButtonVerde onPress={() => salvardadosStorage()} />
                
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
    },
    titleHorario: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 20,
        color: "#595959",
        alignSelf: "flex-start", 
        marginLeft: 20, 
    },
    pickerContainer: {
    width: "70%",
    backgroundColor: "#fff",
    borderBlockColor: "#000000",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    },
      picker: {
    height: 60,
    width: "100%",
    borderBlockColor: "#000000",
    borderWidth: 1,
    borderRadius: 8,
  },
});