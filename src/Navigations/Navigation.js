import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Acount from "../Screens/Acount";
import AcountNavigation from "./AcountNavigation";
import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}} >
            <Tab.Screen
                name="Favorite"
                component={FavoriteNavigation}
                options={{
                    tabBarLabel: "Favoritos",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Pokedex"
                component={PokedexNavigation}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => (
                        renderPokeball()
                    ),
                }}
            />
            <Tab.Screen
                name="Acount"
                component={AcountNavigation}
                options={{
                    tabBarLabel: "Perfil",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const renderPokeball = () => (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, marginBottom: 20 }}
    />
)
    