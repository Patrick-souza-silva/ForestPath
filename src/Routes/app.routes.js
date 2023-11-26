import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import Register from "../screens/resgister";
import Home from "../screens/home";
import Infos from "../screens/infos";

function AppRoutes() {
    const Stack = createNativeStackNavigator(); 

    return (
        <Stack.Navigator initialRouteName="logar" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="logar" component={Login}/>
            <Stack.Screen name="registrar" component={Register}/>
            <Stack.Screen name="princ" component={Home}/>
            <Stack.Screen name="description" component={Infos}/>

        </Stack.Navigator>
    );
}

export default AppRoutes;   