import React from "react";

function PokemonList() {
  return (
    <section>
      <div className="pokemon-list">
        {pokemon.length === 20 &&
          pokemon.map((item, index) => {
            const { name } = item;
            return (
              <article key={index} className="pokemon">
                <div>
                  <img
                    className="pokemon-img"
                    src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
                    alt={`${name}`}
                  />
                </div>
                <div className="poke-footer">
                  <h3>{name}</h3>
                  <button className="btn">
                    <Link
                      to={`/projects/pokemon/${name}`}
                      className="link poke-link"
                    >
                      View Details
                    </Link>
                  </button>
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
}

export default PokemonList;
