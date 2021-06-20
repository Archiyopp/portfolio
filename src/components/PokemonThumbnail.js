import React from "react";
import { Link } from "react-router-dom";

function PokemonThumbnail({ name }) {
  return (
    <article className="pokemon">
      <div style={{ margin: "0 auto" }}>
        <img
          className="pokemon-img"
          src={`https://img.pokemondb.net/sprites/home/normal/${name}.png`}
          alt={`${name} artwork`}
        />
      </div>
      <div className="poke-footer">
        <h3>{name}</h3>
        <Link
          to={`/projects/pokemon/${name}`}
          className="link poke-link"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}

export default PokemonThumbnail;
