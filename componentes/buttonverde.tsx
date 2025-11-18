import { TouchableOpacity,StyleSheet,Text} from "react-native"




export default function buttonverde(){   
    
    return(
        <TouchableOpacity style={styles.buttonverde}>
            <Text style={styles.buttonText} >Confirmar</Text>
             
       </TouchableOpacity>
    

    );


}

const styles=StyleSheet.create({
    buttonverde:{
        width:"70%",
        height:50,
    },
    buttonText:{
        color:"#FFFFFF",
        fontSize:18,
    }
});