import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Input from "../../components/input";
import { useNavigation, useRoute } from "@react-navigation/native";

function Login() {

//ROTAS
const route = useRoute()
    const navigation = useNavigation()

    handleRegister = () => {
        navigation.navigate('registrar')
    }

    handleHome = () => {
        navigation.navigate('princ')
    }
 
 

    return (
            <ImageBackground style={styles.imageLogin}
             source={{uri:'https://i.pinimg.com/236x/7b/c8/f9/7bc8f9426284584377ded95aa48c2087.jpg'}} >
                <Text style={styles.title}>FOREST PATH</Text>

            <View style={styles.boxLogin}>
                <Input text="Email"/>
                <Input text="Senha"/>

                <View style={styles.boxButton}>
                    <TouchableOpacity onPress={handleHome} style={styles.button}>
                        <Text style={styles.textButton}>ENTRAR</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxButton}>
                    <TouchableOpacity onPress={handleRegister} style={styles.button}>
                        <Text style={styles.textButton}>CADASTRE-SE</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.esq}>Esqueci minha senha</Text>

            </View>
            </ImageBackground>
    )
}
export default Login;
