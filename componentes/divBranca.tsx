import{View,StyleSheet}from"react-native";  


export default function DivBranca( { children }: { children : React.ReactNode }){

    return(
        <View style={styles.divBranca}>

            {children}
        </View>
       
    );


}

const styles=StyleSheet.create({
    divBranca:{
        width:"88%",
        height: "70%",
        backgroundColor: "#FFFFFF",
        marginTop:20,
        borderRadius:20,
        alignItems:"center",

    },
});