import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import Searchform from "../components/Searchform";
import Pagination from "../components/pagination";
import PokemonList from "../components/PokemonList";

export default function Pokemon() {
  const { loading, pokemon, error } = useGlobalContext();

  useEffect(() => {
    document.title = "Pokemon Database || Cristian Fernandez";
  }, []);
  return (
    <main>
      <Searchform />
      {loading && <div className="loader"></div>}
      {error && (
        <section className="section">
          <h3 className="error">
            No pokemon found, please write the pokemon's exact name or
            its number!
          </h3>
        </section>
      )}
      {pokemon.length > 0 && <PokemonList />}
      <Pagination />
    </main>
  );
}
