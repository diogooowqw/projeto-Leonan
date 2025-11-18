
import { View, Text, StyleSheet,TouchableOpacity} from "react-native";
import { router } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons';



export default function cabecalhohorario() {

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Agendar 
                {"\n"}
                Horário
           </Text>
             <TouchableOpacity  onPress={() => router.back()} style={{ marginTop:20}}>
                     <MaterialIcons name="arrow-back" size={50} color={"#FFFFFF"}/>
                </TouchableOpacity>
        </View>
    );
}




  const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor:"#1B2C48",
    width:"120%",
    height:"18%",
    flexDirection:"row",
    marginTop:-20,
    borderColor:"#fff",
    borderBottomWidth:0.5,
    gap:180,
    
  },
  text:{
    fontSize: 30,
    color: "#ffffffff",
    marginLeft:70,
    fontWeight: "bold",
    marginTop:25,
  },
  
});