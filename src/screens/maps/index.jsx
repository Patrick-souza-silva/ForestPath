import { ImageBackground , Text, View} from "react-native";
import { styles } from "./styles";
import {requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject, watchPositionAsync, watchHeadingAsync, Accuracy, LocationAccuracy} from "expo-location"
import { useEffect, useState } from "react";
import MapView ,{Marker}from 'react-native-maps';

function Maps(){
    const {location, setLocation} = useState<LocationObject | null>(null);

    async function requestLocationPermissions(){
        const{granted} = await requestForegroundPermissionsAsync();

        if(granted){
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);
        }
    }

    useEffect(() => {
        requestLocationPermissions();
    },[]);

    //Vai sempre atualizar quando houver mudança de local
    useEffect(() =>{
        watchHeadingAsync({
            Accuracy: LocationAccuracy.Highest,
            timeInterval: 1000,
            distanceInterval:1
         }, (Response) =>{

         } );
    }, []);
    return(
            <View style={styles.containerMaps}>

                {
                    location && 
                <MapView 
                    style={styles.map}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude:location.coords.longitude,
                        latitudeDelta:0.005,
                        longitudeDelta:0.005
                    }}
                >
                    <Marker 
                        coordinate ={{
                            latitude: location.coords.latitude,
                            longitude:location.coords.longitude,
                        }}
                    />

              </MapView>
                }
            </View>
    )
}
export default Maps