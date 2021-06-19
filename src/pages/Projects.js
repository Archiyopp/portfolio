import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  React.useEffect(() => {
    document.title = "Projects || Cristian Fernandez";
  }, []);
  return (
    <main>
      <section className="section">
        <h2 className="title">Projects</h2>
        <p>
          I've been following a lot of tutorials right now, so I will
          hopefully add more projects in the near future.
        </p>
        <p>Check out my pokemon database: </p>
        <Link to="/projects/pokemon" className="poke-link">
          Pokemon Database
        </Link>
      </section>
    </main>
  );
}

export default Projects;
