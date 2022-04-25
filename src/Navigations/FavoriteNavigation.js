import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorite from "../Screens/Favorite";

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='favorite'
                component={Favorite}
                options={{
                    title: "Favoritos",
                }}
                 />
        </Stack.Navigator>
    )
}