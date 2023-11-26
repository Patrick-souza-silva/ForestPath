import { TextInput,View, Text} from "react-native";
import { styles } from "./styles";

function Input (props){
 
return(

    <View style={styles.input}>
    <Text style={styles.text}>{props.text}</Text>
    <TextInput style={styles.inputInfo}></TextInput>
    </View>
)
}
export default Input;