import React from "react";
import { Link } from "react-router-dom";

const PokemonThumbnail = React.memo(({ name }) => {
  return (
    <article className="pokemon">
      <div style={{ margin: "0 auto" }}>
        <img
          className="pokemon-img"
          src={`https://img.pokemondb.net/sprites/home/normal/${name}.png`}
          alt={`${name} artwork`}
          loading="lazy"
        />
      </div>
      <div className="poke-footer">
        <h2 className="poke-footer-name">{name}</h2>
        <Link to={`/projects/pokemon/${name}`} className="poke-link">
          View Details
        </Link>
      </div>
    </article>
  );
});

export default PokemonThumbnail;
