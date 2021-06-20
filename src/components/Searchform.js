import React from "react";
import { useGlobalContext } from "../context";

function Searchform() {
  const { handleSubmit, handleValue, search } = useGlobalContext();
  const searchRef = React.useRef(null);
  React.useEffect(() => {
    searchRef.current.focus();
  }, [search]);
  return (
    <section className="section search">
      <h2 className="title">Pokemon Database</h2>
      <form onSubmit={handleSubmit} className="search-form">
        <div className="form-control">
          <label htmlFor="pokemon">Search Pokemon: </label>
          <input
            id="pokemon"
            name="pokemon"
            type="text"
            onChange={handleValue}
            ref={searchRef}
          />
        </div>
      </form>
    </section>
  );
}

export default Searchform;
