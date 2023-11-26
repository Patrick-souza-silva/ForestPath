import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles"
import { Ionicons } from '@expo/vector-icons';
import { useRoute, useNavigation } from "@react-navigation/native";

function BoxTrilha(props) {


  const route = useRoute()
  const navigation = useNavigation()

  handleRegister = () => {
      navigation.navigate('description')
  }
  return (
    <TouchableOpacity 
    onPress={handleRegister}
    style={styles.main}>
      <View style={styles.viewTitle}>
        <Text style={styles.local}>{props.local}</Text>
        <Text style={styles.descricao}>{props.descricao}</Text>
      </View>

      <View style={styles.viewStars}>
        <Ionicons name="star" size={28} color="yellow" />
        <Ionicons name="star" size={28} color="yellow" />
        <Ionicons name="star" size={28} color="white" />
        <Ionicons name="star" size={28} color="white" />
        <Ionicons name="star" size={28} color="white" />
        <Text style={{ color: 'white', fontWeight: 'bold', marginTop:5 }} >{props.nameTutor}</Text>
      </View>


    </TouchableOpacity>






  )
}
export default BoxTrilha;