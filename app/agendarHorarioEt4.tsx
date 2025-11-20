import { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Cabecalhohorario from "../componentes/cabecalhohorario";
import DivBranca from "../componentes/divBranca";
import { router } from "expo-router";
import Etapas from "../componentes/etapas";
import ButtonVerde from "../componentes/buttonverde";
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function agendarHorarioet4() {

    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [servico, setServico] = useState<any>(null);
    const [barbeiro, setBarbeiro] = useState<any>(null);
    const [dataHora, setDataHora] = useState<any>(null);


    const pegarDadosDoStorage = async () => {
        try {
            const dadosServico = await AsyncStorage.getItem('dadosServico');
            const dadosBarbeiro = await AsyncStorage.getItem('dadosBarbeiro');
            const dadosDataHora = await AsyncStorage.getItem('dadosDataHora');

            setServico(dadosServico ? JSON.parse(dadosServico) : null);
            setBarbeiro(dadosBarbeiro ? JSON.parse(dadosBarbeiro) : null);
            setDataHora(dadosDataHora ? JSON.parse(dadosDataHora) : null);
            console.log('Dados carregados do storage:', {
                servico: dadosServico,
                barbeiro: dadosBarbeiro,
                dataHora: dadosDataHora,
            });
        }
        catch (error) {
            console.log('Erro ao pegar os dados:', error);
        }
    }

    //Na hora o site abre chama a function
    useEffect(() => {
        pegarDadosDoStorage();
    }, []);

    const enviarEmail = async () => {
        try {
            const response = await fetch(
                "https://enviaremailconfirmacao-myuxiosn2q-uc.a.run.app",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: email,
                        servico: { nome: servico?.servico?.nome },
                        barbeiro: { nome: barbeiro?.barbeiro?.barbeiro },
                        dataHora: {
                            data: dataHora?.data,
                            hora: dataHora?.hora,
                        },
                    }),
                }
            );

            const resultado = await response.text();
            console.log(resultado);
            alert("Agendamento confirmado! Email enviado.");
        } catch (error) {
            console.log(error);
            alert("Erro ao enviar email.");
        }
    };

    return (
        <View style={styles.container}>
            <Cabecalhohorario />


            <View style={styles.divBranca}>
                <Text style={styles.title}>Documentos</Text>
                <Text style={styles.subtitle}>Preencha seus dados para finalizar o agendamento </Text>


                <TextInput placeholder="Nome" style={styles.input} value={nome} onChangeText={setNome} />

                <TextInput placeholder="email" style={styles.input} value={email} onChangeText={setEmail} />


                <ButtonVerde onPress={() => { enviarEmail(); router.replace('/'); }} />


            </View>


            <View style={styles.containerResumo}>
                <Text style={styles.titleResumo}>Resumo do Agendamento</Text>
                <Text style={styles.textDescricao}>Serviço</Text>
                <View style={{ marginTop: 10, flexDirection: 'row', gap: 40 }}>
                    <Text style={styles.textResumoServico}>{servico?.servico?.nome}</Text>
                    <Text style={styles.textResumoPreco}> R${servico?.servico?.preco}</Text>
                </View>
                <Text style={styles.textDescricao}>Profissional</Text>
                <Text style={styles.textResumoBarbeiro}> {barbeiro?.barbeiro?.barbeiro}</Text>
                <Text style={styles.textDescricao}>Data e Hora</Text>
                <Text style={styles.textResumoBarbeiro}> {dataHora?.data} - {dataHora?.hora} </Text>
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
        marginLeft: 30,
    },
    input: {
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
        height: "32%",
        backgroundColor: "#FFFFFF",
        marginTop: 20,
        borderRadius: 20,
    },
    titleResumo: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        color: "#595959",
        marginLeft: 20,
    },
    textResumoServico: {
        fontSize: 17,
        color: "#808080",
        marginTop: 5,
        fontWeight: "600",
        marginLeft: 20,
    },
    textResumoPreco: {
        fontSize: 20,
        color: "#059969",
        marginTop: 5,
        marginLeft: 20,
        fontWeight: "600",
    },
    textResumoBarbeiro: {
        fontSize: 17,
        color: "#808080",
        fontWeight: "600",
        marginTop: 10,
        marginLeft: 15,
    },
    textDescricao: {
        fontSize: 18,
        color: "#090909ff",
        fontWeight: "600",
        marginTop: 5,
        marginLeft: 20,
    }
});