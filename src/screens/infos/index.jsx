import { View, ImageBackground, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Img from "../../components/images";
import Descricao from "../../components/boxDescrision";
import { useRoute, useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';


function Infos() {

    const navigation = useNavigation()

    handleBack = () => {
            navigation.goBack()
          }


    handleLocation = () => {
        navigation.navigate('location')
    }


    //--------------------------------
    const route = useRoute()
    const { local, descricao, distancia, tempo, dificuldade, modalidade } = route.params;
    //--------------------------------
    return (
        <ImageBackground style={styles.imageInfo}
            source={{ uri: 'https://wallpapercave.com/wp/wp5938548.jpg' }}
        >
            <Img>
            <AntDesign onPress={handleBack} style={styles.iconBack} name="back" size={50} color="white" />

            </Img>
            <Descricao></Descricao>

            <View style={styles.boxLogin}>
                <Text style={styles.name}>{local}</Text>

                <View style={styles.boxLogin2}>
                    <View style={styles.description}>
                        <Text style={styles.name}>{modalidade}</Text>
                        <Text style={styles.name}>{distancia}</Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.name}>{tempo}</Text>
                        <Text style={styles.name}>{dificuldade}</Text>
                    </View>
                </View>


            </View>

            <TouchableOpacity onPress={handleLocation} style={styles.buttonLocation}>
                <Text style={styles.textLocation}>LOCALIZAÇÃO</Text>
            </TouchableOpacity>

        </ImageBackground>
    )
}

export default Infos