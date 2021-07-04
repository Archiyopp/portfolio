import React from "react";
import { Link } from "react-router-dom";
import Instagramw from "../instagramlogin.webp";
import Instagramj from "../instagramlogin.jpg";

function Projects() {
  React.useEffect(() => {
    document.title = "Projects || Cristian Fernandez";
  }, []);
  return (
    <main>
      <section className="section">
        <h2 className="title">Projects</h2>
        <p>
          I've been following a lot of tutorials right now, so I will hopefully
          add more projects in the near future.
        </p>
        <p>Check out my pokemon database: </p>
        <Link
          to="/projects/pokemon"
          className="poke-link"
          style={{ marginBottom: "0.7rem" }}
        >
          Pokemon Database
        </Link>
        <p>
          Check out my Instagram Clone done with React, Tailwind CSS and
          Firebase
        </p>
        <a
          href="https://instagram-clone-arch.vercel.app/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <picture>
            <source type="image/webp" srcSet={Instagramw} />
            <img
              type="image/jgp"
              src={Instagramj}
              alt="Instagram clone login page"
              style={{ border: "1px solid gray", borderRadius: "0.5rem" }}
              width="276"
              height="223"
            />
          </picture>
        </a>
      </section>
    </main>
  );
}

export default Projects;
