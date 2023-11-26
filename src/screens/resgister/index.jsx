import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Input from "../../components/input";
import { useNavigation, useRoute } from "@react-navigation/native";

function Register() {

    const route = useRoute()
    const navigation = useNavigation()

    handleLogar = () => {
        navigation.navigate('logar')
    }

    
    return (
        <ImageBackground style={styles.imageLogin}
            source={{ uri: 'https://www.teahub.io/photos/full/190-1900370_1080x1920-country-road-2-sony-xperia-z2-wallpapers.jpg' }} >
            <Text style={styles.title}>CADASTRO</Text>
            <View style={styles.boxLogin}>
                <Input text="Insira seu Nome" />
                <Input text="Insira seu SobreNome" />
                <Input text="Insira seu Email" />
                <Input text="Insira sua Senha" />
            </View>
            <View style={styles.boxButton}>
                <TouchableOpacity onPress={handleLogar} style={styles.button}>
                    <Text style={styles.textButton}>CADASTRE-SE</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
export default Register
    ;
