import { TouchableOpacity,StyleSheet,View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";




export default function buttonServiço({children}: {children: React.ReactNode}){   
    
    return(
        <TouchableOpacity style={styles.buttonServiço}>
           {children}

            
       </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    buttonServiço: {
        width: "80%",
        height: 100,
        borderRadius: 10,
        borderColor: "#c9c9c9ff",
        borderWidth: 2,
        marginTop: 10,
        padding: 10,
    },
  
}); 