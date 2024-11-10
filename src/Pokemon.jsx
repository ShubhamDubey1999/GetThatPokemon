import { useEffect, useState } from "react";
import "./index.css";
import { PokemonCards } from "./PokemonCards";
export const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errormsg, setError] = useState(null);
  const [searchPokemon, setSearchPokemon] = useState("");
  const API = "https://pokeapi.co/api/v2/pokemon?limit=100";
  const fetchPokemon = async () => {
    try {
      var res = await fetch(API);
      var data = await res.json();
      var urls = data.results.map(async (currPokemon) => {
        const res2 = await fetch(currPokemon.url);
        const data2 = await res2.json();
        return data2;
      });
      const detailedResponse = await Promise.all(urls);
      console.log(detailedResponse);
      setPokemon(detailedResponse);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError(e.message);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);

  const searchInput = pokemon.filter((x) =>
    x.name.toLowerCase().includes(searchPokemon.toLowerCase())
  );

  if (loading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  if (errormsg) {
    return (
      <>
        <h1>{errormsg}</h1>
      </>
    );
  }
  return (
    <>
      <section className="container">
        <header>
          <h1>Let's Catch Pokémon</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            name=""
            id=""
            placeholder="search pokemon"
            value={searchPokemon}
            onChange={(e) => setSearchPokemon(e.target.value)}
          />
        </div>
        <div>
          <ul className="cards">
            {searchInput.map((curPokemon) => {
              return (
                <PokemonCards id={curPokemon.id} PokemonData={curPokemon} />
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};
