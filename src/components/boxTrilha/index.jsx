import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./styles"
import { Ionicons } from '@expo/vector-icons';
import { useRoute, useNavigation } from "@react-navigation/native";
import { useState } from "react";

function BoxTrilha(props) {



  const route = useRoute()
  const navigation = useNavigation()

  //----------------------------------------------
  const [local, setLocal] = useState(props.local)
  const [descricao, setdescricao] = useState(props.descricao)
  const [distancia, setDistancia] = useState(props.distancia)
  const [dificuldade, setDificuldade] = useState(props.dificuldade)
  const [tempo, setTempo] = useState(props.tempo)
  const [modalidade, setModalidade] = useState(props.modalidade)




  handleRegister = () => {
    navigation.navigate('description', { local, descricao, distancia, dificuldade, tempo, modalidade})
  }
  //----------------------------------------------

  return (
    <TouchableOpacity
      onPress={handleRegister}
      style={styles.main}>
      <View style={styles.viewTitle}>
        <Text style={styles.local}>{props.local}</Text>

        <Text style={styles.descricao}>{props.descricao}</Text>
      </View>

      <View style={styles.viewStars}>
        <Ionicons name="pacman" size={28} color="yellow" />
        <Ionicons name="star" size={28} color="yellow" />
        <Ionicons name="star" size={28} color="white" />
        <Ionicons name="star" size={28} color="white" />
        <Ionicons name="star" size={28} color="white" />
        <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 5 }} >{props.nameTutor}</Text>
      </View>


    </TouchableOpacity>






  )
}
export default BoxTrilha;