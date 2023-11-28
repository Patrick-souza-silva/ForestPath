import { styles } from "./styles";
import { ImageBackground, ScrollView } from "react-native";
import BoxTrilha from "../../components/boxTrilha";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation , useRoute} from "@react-navigation/native";


function Home() {

        const route = useRoute()
        const navigation = useNavigation()

        handleBack = () => {
                navigation.goBack()
              }

        const informacoes = [
                { titulo: 'Pato Branco', descricao: 'Aventure-se por uma trilha íngreme com vistas panorâmicas deslumbrantes, culminando em um pico majestoso', distancia: '15KM', dificuldade: 'MÉDIA', tempo: '90MIN', modalidade: 'TREKKING', },
                { titulo: 'Francisco beltrão ', descricao: 'Trilha encantadora entre bosques exuberantes e cachoeiras serenas, revelando a magia da natureza intocada', distancia: '5KM', dificuldade: 'FÁCIL', tempo: '120MIN', modalidade: 'CICLE' },
                { titulo: 'Realeza', descricao: 'Descubra uma trilha mística através de densa floresta, pontilhada por riachos cristalinos e fauna surpreendente.', distancia: '20KM', dificuldade: 'DIFÍCIL', tempo: '60MIN', modalidade: 'MOTOCROOS' },
        ];

        return (
                <ImageBackground style={styles.imageHome}
                        source={{ uri: 'https://images.pexels.com/photos/17731161/pexels-photo-17731161/free-photo-of-ilhas-dos-acores.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} >

                        <AntDesign onPress={handleBack} style={styles.iconBack} name="back" size={50} color="white" />

                        <ScrollView>

                                <BoxTrilha
                                        local={informacoes[0].titulo}
                                        descricao={informacoes[0].descricao}
                                        distancia={informacoes[0].distancia}
                                        tempo={informacoes[0].tempo}
                                        dificuldade={informacoes[0].dificuldade}
                                        modalidade={informacoes[0].modalidade}
                                        nameTutor='Rodrigo tomazi'
                                ></BoxTrilha>
                                <BoxTrilha
                                        local={informacoes[1].titulo}
                                        descricao={informacoes[1].descricao}
                                        distancia={informacoes[1].distancia}
                                        tempo={informacoes[1].tempo}
                                        dificuldade={informacoes[1].dificuldade}
                                        modalidade={informacoes[1].modalidade}
                                        nameTutor='CLeiton'
                                ></BoxTrilha>
                                <BoxTrilha
                                        local={informacoes[2].titulo}
                                        descricao={informacoes[2].descricao}
                                        distancia={informacoes[2].distancia}
                                        tempo={informacoes[2].tempo}
                                        dificuldade={informacoes[2].dificuldade}
                                        modalidade={informacoes[2].modalidade}
                                        nameTutor='TAff'
                                ></BoxTrilha>

                        </ScrollView>
                </ImageBackground>
        )
}
export default Home;