import { View, Text, FlatList } from 'react-native'
import React from 'react'

export default function PokemonList(props) {
    const {
        pokemons
    } = props;
  return (
    <FlatList
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemons) => String(pokemons.id)}
        renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  )
}