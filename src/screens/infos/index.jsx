import { View, ImageBackground } from "react-native";
import { styles } from "./styles";
import Img from "../../components/images";
import Descricao from "../../components/boxDescrision";

function Infos(){
    return(
        <ImageBackground style={styles.imageInfo}
        source={{ uri: 'https://wallpapercave.com/wp/wp5938548.jpg' }} 
        >
            <Img></Img>
            <Descricao></Descricao>

        </ImageBackground>
    )
}

export default Infos