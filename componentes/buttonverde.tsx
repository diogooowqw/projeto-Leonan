import { TouchableOpacity,StyleSheet,Text} from "react-native"




export default function buttonverde({onPress}: {onPress?: () => void}){   

   
    
    return(
        <TouchableOpacity style={styles.buttonverde} onPress={onPress}>
            <Text style={styles.buttonText} >CONFIRMAR</Text>
             
       </TouchableOpacity>
    

    );


}

const styles=StyleSheet.create({
    buttonverde:{
        width:"40%",
        height:50,
        backgroundColor:"#10B981",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        marginTop:20,
        
    
    },
    buttonText:{
        color:"#FFFFFF",
        fontSize:18,
        fontWeight:"bold",
    }
});