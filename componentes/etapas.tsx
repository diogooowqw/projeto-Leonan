import React, { useRef, useEffect } from "react";
import { View, Animated, StyleSheet,Text } from "react-native";

export default function Etapas() {
  const tubo = useRef(new Animated.Value(0)).current;
  const circulo = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(tubo, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false
      }),
      Animated.timing(circulo, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false
      })
    ]).start();
  }, []);

  const larguraTubo = tubo.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"]
  });

  const alturaCirculo = circulo.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"]
  });

  return (
    <View style={styles.wrapper}>
      

      <View style={styles.tuboContainer}>
        <Animated.View style={[styles.tuboAgua, { width: larguraTubo }]} />
      </View>


      <View style={styles.circulo}>
        <Animated.View style={[styles.circuloAgua, { height: alturaCirculo }]} />
        <Text style={styles.text}>1</Text>
      </View>

       <View style={styles.tuboContainer}>
        <Animated.View  />
      </View>

        <View style={styles.circulo}>
            <Text style={styles.text}>2</Text>
        <Animated.View />
      </View>
      
       <View style={styles.tuboContainer}>
        <Animated.View  />
      </View>

     

    </View>
  );
}

const styles = StyleSheet.create({
wrapper: {
  flexDirection: "row",
  alignItems: "center",
  gap: 10,
  marginTop: 20,

},

  tuboContainer: {
    width: 100,
    height: 20,
    backgroundColor: "#2c3e50",
    borderRadius: 20,
    overflow: "hidden",
  },
  
  tuboAgua: {
    position: "absolute",
    left: 0, 
    top: 0,
    bottom: 0,
    backgroundColor: "#059969",
  },


  circulo: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: "#2c3e50",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  circuloAgua: {
    width: "100%",
    backgroundColor: "#059969",
    position: "absolute",
    bottom: 0
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  }
});
