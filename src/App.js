import 'bootstrap/dist/css/bootstrap.css'
import React, { useState, useEffect } from 'react'
import PokemonList from './components/PokemonList'
import Pagination from './components/Pagination'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl, setNextPageUrl] = useState("")
  const [prevPageUrl, setPrevPageUrl] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    axios.get(currentPageUrl).then((res => {
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map((item) => item.name))
      setIsLoading(false)
    }))
  }, [currentPageUrl])


  function goToNextPage()
  {
    setCurrentPageUrl(nextPageUrl)
  }

  function goToPrevPage()
  {
    setCurrentPageUrl(prevPageUrl)
  }

  if (isLoading)
    return <h5>laoding....</h5>


  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination
       goToNextPage={nextPageUrl ? goToNextPage : null}
       goToPrevPage={goToPrevPage}
       />
    </>
  );
}

export default App;
