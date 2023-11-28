import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    imageInfo: {
        flex: 1,
        alignItems: "center",
        padding:20
      },
      boxLogin: {
        backgroundColor: "rgba(154, 178, 169, 0.5)",
        width: 350,
        height: 400,
        alignItems: "center",
        borderRadius: 20,
        marginTop: 20,
        
      },boxLogin2:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        width:"100%",
        marginTop:25,
        
        
      },
      name:{
        fontSize:30,  
        fontWeight:"bold",
        color:'#0D1117',
        marginBottom:100
      },
      description:{
        width:'50%',
        height:10,  
        justifyContent:"center",
        height:"100%",
        alignItems:"center",
        textAlign:"center"
     
      },

      //-------------

      buttonLocation:{
        width:'80%',
        height:40,
        backgroundColor: "rgba(154, 178, 169, 0.8)",
        marginTop:50,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
      },
      textLocation:{
        fontSize:20,
        color:"black",
        fontWeight:"bold"
      },
      iconBack:{
        padding:20,
        marginEnd:300
      }

})