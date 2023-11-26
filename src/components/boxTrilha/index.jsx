import { View, Text } from "react-native";
import { styles } from "./styles"

function BoxTrilha(props){
    return(
            <View style={styles.boxTrilha}>
                <View style={styles.titles}>
                    <Text style={styles.lugarTrilha}></Text>
                    <Text style={styles.nomeTrilha}></Text>
                </View>

                <Text style={styles.descricaoTrilha}></Text>

                <View  style={styles.avaliacao}>
                    <Text style={styles.criador}></Text>
                </View>
                   
                    
            </View>

    )
}
export default BoxTrilha;