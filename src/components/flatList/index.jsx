import { TouchableOpacity, Text} from "react-native";
import { styles } from "./styles";

function Button(props) {
    return (

        <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>{props.nameButton}</Text>
        </TouchableOpacity>
    )
}
export default Button