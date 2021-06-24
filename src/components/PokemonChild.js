import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";

const url = `https://pokeapi.co/api/v2/pokemon/`;
function PokemonChild() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(false);
  const buttonRef = useRef(null);
  let { name } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchPokemon = async () => {
      try {
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
            abilities,
            types,
            base_experience,
          } = pokemon;
          const newPokemon = {
            img: front_default,
            height,
            weight,
            name,
            types,
            base_experience,
            abilities,
          };
          setPokemon(newPokemon);
        }
      } catch (error) {
        console.log(error);
        setError(true);
      }
      setLoading(false);
    };
    try {
      fetchPokemon();
    } catch (error) {
      setError(true);
      console.log(error);
      setPokemon([]);
    }
    setLoading(false);
    document.title = `${
      name.charAt(0).toUpperCase() + name.slice(1)
    } | Cristian Fernandez`;
  }, [name]);
  useEffect(() => {
    buttonRef.current.focus();
  }, [error]);

  return (
    <main>
      <section className="section pokemon-section">
        <Link to="/projects/pokemon" className="poke-link" ref={buttonRef}>
          Pokemon Database
        </Link>
        {loading && <div className="loader"></div>}
        {(pokemon.name && <h2 className="title">{name}</h2>) ||
          (error && <h2 className="title">No pokemon found</h2>)}
        {pokemon.name && (
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
                  const type = item.type;
                  return (
                    <span className="type" key={index}>
                      {type.name}
                    </span>
                  );
                })}
              </p>
              <p>
                <span>Ability: </span>
                {pokemon.abilities[0].ability.name}
              </p>
              <p>
                <span>Hidden Ability: </span>
                {pokemon.abilities[1] && pokemon.abilities[1].ability.name}
              </p>
              <p>
                <span>Base Experience: </span>
                {pokemon.base_experience}
              </p>
            </div>
          </article>
        )}
        <a
          className="external-link"
          href={`http://pokemondb.net/pokedex/${name}`}
        >
          Search for the pokemon in another database
        </a>
      </section>
    </main>
  );
}

export default PokemonChild;
