import React from "react";
import PokemonThumbnail from "./PokemonThumbnail";
import { useGlobalContext } from "../context";

const PokemonList = () => {
  const { pokemon } = useGlobalContext();
  React.useEffect(() => {
    console.log("pokemonList called");
  }, []);
  return (
    <section>
      <div className="pokemon-list">
        {pokemon.map((item, index) => {
          return <PokemonThumbnail key={index} {...item} />;
        })}
      </div>
    </section>
  );
};

export default PokemonList;
