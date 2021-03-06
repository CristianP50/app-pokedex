import { useEffect, useState } from "react";
import { View } from 'react-native'
import { getPokemonDetailsByUrlApi, getPokemonsApi } from "../Api/pokemon";
import PokemonList from "../Components/PokemonList";

export default function Pokedex() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
        (async () => {
          await loadPokemons();
        })()
  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      
      const pokemonsArray = [];
      
      for await (const pokemonItem of response.results)
      {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemonItem.url);

        pokemonsArray.push
        (
          {
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            order: pokemonDetails.order,
            imagen: pokemonDetails.sprites.other['official-artwork'].front_default,
          }
        )
      }

      setPokemons([...pokemons, ...pokemonsArray]);

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <View>
      <PokemonList pokemons={pokemons} />
    </View>
  )
}