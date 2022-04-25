import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Pokedex from "../Screens/Pokedex";
import Pokemons from "../Screens/Pokemons";


const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='pokedex'
                component={Pokedex}
                options={{
                    title: "Pokedex"
                }}
            />
            <Stack.Screen name="Pokemons" component={Pokemons} />
        </Stack.Navigator>
    )
}