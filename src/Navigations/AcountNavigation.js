import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Acount from "../Screens/Acount";


const Stack = createNativeStackNavigator();

export default function AcountNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="acount"
                component={Acount}
                options={{
                    title: "Usuario"
                }}
            />
        </Stack.Navigator>
    )
}