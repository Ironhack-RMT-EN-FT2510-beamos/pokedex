import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// How do we access the API from here? fetch(URL)
// Where do we call the API? somewhere inside the component. ALWAYS in the componentDidMount to prevent endless loops in react
// How do we process the API response? then/catch or async/await 
// What do we do with the data? Store it into an array, and call set function to trigger a re-rendering of the component
// How do we render the list of all Pokemon List? .map()

function Sidebar() {

  const [ pokemonArr, setPokemonArr ] = useState(null)

  useEffect(() => {

    fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => {
      // console.log(response)
      return response.json()
    })
    .then((response) => {
      // console.log(response.results)
      setPokemonArr(response.results)
    })
    .catch((error) => {
      console.log(error)
    })

  }, [])

  if (pokemonArr === null) {
    return <h3>searching...</h3>
  }

  return (
    <nav className="sidebar">
      
      {/* example of 3 links */}

      {pokemonArr.map((eachPokemon, index) => {
        return <Link key={index} to={`/pokemon-details/${eachPokemon.name}`}>{eachPokemon.name}</Link>
      })}

      {/* <Link to={"/"}>bulbasaur</Link>
      <Link to={"/"}>charmander</Link>
      <Link to={"/"}>squirtle</Link> */}

    </nav>
  )
}

export default Sidebar