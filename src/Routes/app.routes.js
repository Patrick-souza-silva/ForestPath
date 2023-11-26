import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import Register from "../screens/resgister";
import Menu from "../screens/menu";

function AppRoutes() {
    const Stack = createNativeStackNavigator(); 

    return (
        <Stack.Navigator initialRouteName="logar" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="logar" component={Login}/>
            <Stack.Screen name="registrar" component={Register}/>
            <Stack.Screen name="main" component={Menu}/>
        </Stack.Navigator>
    );
}

export default AppRoutes;