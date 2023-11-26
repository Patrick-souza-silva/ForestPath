import { ImageBackground, View, Text,TouchableOpacity} from "react-native"
import { styles } from "./styles"
import { useNavigation, useRoute } from "@react-navigation/native";

function Menu(){
    const route = useRoute()
    const navigation = useNavigation()

    return(
        <ImageBackground style={styles.imageLogin}
        source={{uri:'https://i.pinimg.com/236x/7b/c8/f9/7bc8f9426284584377ded95aa48c2087.jpg'}} >
           <Text style={styles.title}>FOREST PATH</Text>

       </ImageBackground>
    )
}
export default Menu;