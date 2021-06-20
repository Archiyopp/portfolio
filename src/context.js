import React, { useState, useCallback } from "react";

const AppContext = React.createContext();

const url = "https://pokeapi.co/api/v2/pokemon/";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("?limit=50");
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(value) === 0 || parseInt(value) > 898) {
      setSearch("?limit=50");
      setError(true);
    } else if (value === "") {
      setSearch("?limit=50");
    } else {
      setError(false);
      setSearch(value.toLowerCase());
    }
  };
  const fetchPokemon = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}${search}`);
      const data = await response.json();

      if (data.results) {
        const newPokemon = data.results;
        setPokemon(newPokemon);
      } else if (data.name) {
        setPokemon([{ name: data.name }]);
      } else {
        setPokemon([]);
      }
    } catch (error) {
      console.log(error);
      setPokemon([]);
      setError(true);
      setLoading(false);
    }
    setLoading(false);
  }, [search]);

  React.useEffect(() => {
    try {
      fetchPokemon();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [search, fetchPokemon]);

  return (
    <AppContext.Provider
      value={{
        loading,
        handleValue,
        handleSubmit,
        error,
        pokemon,
        setSearch,
        search,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useGlobalContext() {
  return React.useContext(AppContext);
}

export { AppContext, AppProvider };
