import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

type Props = {
  children?: React.ReactNode;
  dados?: any;
  onPress?: (dados: any) => void;
  selecionado?: boolean; // modo controlado
};

export default function ButtonSelecionar({ children, dados, onPress, selecionado }: Props) {
  const [selecionadoInterno, setSelecionadoInterno] = useState(false);
  const controlado = selecionado !== undefined;
  const ativo = controlado ? selecionado : selecionadoInterno;

  const handlePress = () => {
    if (!controlado) setSelecionadoInterno(!selecionadoInterno);
    onPress && onPress(dados);
  };

  return (
    <TouchableOpacity
      style={[styles.buttonServico, ativo && { backgroundColor: "#d1fae5", borderColor: "#059669" }]}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <View style={{ flex: 1 }}>{children}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonServico: {
    width: "80%",
    height: 100,
    borderRadius: 10,
    borderColor: "#c9c9c9",
    borderWidth: 2,
    marginTop: 10,
    padding: 10,
    justifyContent: "center",
  },
});