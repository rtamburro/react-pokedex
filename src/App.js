import React, {useState, useEffect} from 'react';
import { getAllPokemon, getPokemon } from './services/pokemon';
import Card from './components/Card';
import Navbar from './components/Navbar';
import logo from './logo.svg';
import './App.css';
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initialUrl = "https://pokeapi.co/api/v2/pokemon/?limit=12"

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl)
    await loadingPokemon(data.results)
    setNextUrl(data.next);
    setPrevUrl(data.prevUrl);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl)
    await loadingPokemon(data.results)
    setNextUrl(data.next);
    setPrevUrl(data.prevUrl);
    setLoading(false);
  }

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );

    setPokemonData(_pokemonData);
  };


  return (
  <div className="bg-gray-700 ">
    {
      loading ? 
      <div className="flex items-center justify-center h-screen bg-gray-700">
        <ClipLoader color={"#D0021B"} loading={loading} size={150} />
      </div>
      : (
        <>
        <Navbar />
        <div className="flex justify-center btn">
          <button className="btn-direct" onClick={prev}>Back</button>
          <button className="btn-direct" onClick={next}>Next</button>
        </div>
          <div className="sm:overflow-hidden md:grid-layout-main">
            {pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon}/>
            })}
          </div>
          <div className="flex justify-center btn">
            <button className="mb-8 btn-direct" onClick={prev}>Back</button>
            <button className="mb-8 btn-direct" onClick={next}>Next</button>
        </div>
        </> 
      )
    }
  </div>
  )
}

export default App;