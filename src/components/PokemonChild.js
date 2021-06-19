import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const url = `https://pokeapi.co/api/v2/pokemon/`;
function PokemonChild() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  let { name } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchPokemon = async () => {
      const response = await fetch(`${url}${name}`);
      const pokemon = await response.json();
      if (pokemon.name) {
        const {
          sprites: {
            other: {
              "official-artwork": { front_default },
            },
          },
          height,
          weight,
          abilities: [
            {
              ability: { name },
            },
            {
              ability: { name: hiddenname },
            },
          ],
          types,
          base_experience,
        } = pokemon;
        const newPokemon = {
          img: front_default,
          height,
          weight,
          name,
          hiddenname,
          types,
          base_experience,
        };
        setPokemon(newPokemon);
        console.log(pokemon);
      }
      setLoading(false);
    };
    fetchPokemon();
  }, [name]);

  if (loading) {
    return <div className="loader"></div>;
  }
  if (!pokemon) {
    return <h2 className="title">No pokemon to display</h2>;
  }
  return (
    <main>
      <section className="section pokemon-section">
        <Link to="/projects/pokemon" className="poke-link">
          Pokemon Database
        </Link>
        <h2 className="title">{name}</h2>
        <article className="poke-child">
          <img src={pokemon.img} alt={name} />
          <div className="poke-info">
            <p>
              <span>Name: </span>
              {name}
            </p>
            <p>
              <span>Height: </span>
              {(pokemon.height * 10).toFixed(1)}
              <span className="unit"> cm</span>
            </p>
            <p>
              <span>Weight: </span>
              {(pokemon.weight * 0.1).toFixed(1)}
              <span className="unit"> kg</span>
            </p>
            <p>
              <span>Types: </span>
              {pokemon.types.map((item, index) => {
                const {
                  type: { name },
                } = item;
                return (
                  <span className="type" key={index}>
                    {name}
                  </span>
                );
              })}
            </p>
            <p>
              <span>Ability: </span>
              {pokemon.name}
            </p>
            <p>
              <span>Hidden Ability: </span>
              {pokemon.hiddenname}
            </p>
            <p>
              <span>Base Experience: </span>
              {pokemon.base_experience}
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default PokemonChild;
