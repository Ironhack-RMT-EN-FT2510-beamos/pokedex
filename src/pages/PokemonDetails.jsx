import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function PokemonDetails() {

  const [ pokemon, setPokemon ] = useState(null)
  const params = useParams()

  useEffect(() => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`)
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((response) => {
      console.log(response)
      setPokemon(response)
    })
    .catch((error) => {
      console.log(error)
    })

  }, [params.pokemonName]) // componentDidMount & componentDidUpdate

  if (pokemon === null) {
    return <h3>searching...</h3>
  }

  return (
    <div>
      
      <h3>{pokemon.name}</h3>

      <img src={pokemon.sprites.front_default} alt="" />

      <h4>main type: {pokemon.types[0].type.name}</h4>

    </div>
  )
}
export default PokemonDetails