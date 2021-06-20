import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import PokemonThumbnail from "../components/PokemonThumbnail";
import Searchform from "../components/Searchform";
import Pagination from "../components/pagination";

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
      {pokemon.length > 0 && (
        <section>
          <div className="pokemon-list">
            {pokemon.map((item, index) => {
              return <PokemonThumbnail key={index} {...item} />;
            })}
          </div>
        </section>
      )}
      <Pagination />
    </main>
  );
}
