import { styles } from "./styles";
import { ImageBackground, SafeAreaView, FlatList, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import BoxTrilha from "../../components/boxTrilha";
import Button from "../../components/flatList";

function Home() {

        return (
                <ImageBackground style={styles.imageHome}
                        source={{ uri: 'https://images.pexels.com/photos/17731161/pexels-photo-17731161/free-photo-of-ilhas-dos-acores.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} >

                        <View style={styles.viewButton}>
                                <Button nameButton="Trekking"></Button>
                                <Button nameButton="Mountain Bike"></Button>
                                <Button nameButton="Motocross"></Button>
                        </View>
                     
                                <BoxTrilha
                                        local='Pato Branco - Cleiton'
                                        descricao='Local para desbravar as mais selvagens aventuras, Pato branco e um local muito perigoso para turistas'
                                        nameTutor='Rodrigo tomazi'
                                ></BoxTrilha>
                </ImageBackground>
        )
}
export default Home;