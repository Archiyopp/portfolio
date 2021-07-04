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
          I've been studying a lot of courses and tutorials about React,
          javascript, and some libraries with which I will hopefully add more
          projects in the near future.
        </p>
        <div className="projects">
          <div
            style={{
              display: "flex",
              flexFlow: "column wrap",
              alignItems: "center",
            }}
          >
            <p>
              Check out my pokemon database done with the Pokeapi, and basic
              React hooks.
            </p>
            <Link
              to="/projects/pokemon"
              className="poke-link"
              style={{ marginBottom: "0.7rem" }}
            >
              Pokemon Database
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              flexFlow: "column wrap",
              alignItems: "center",
            }}
          >
            <p>
              Check out my Instagram Clone done with React, Tailwind CSS and
              Firebase.
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
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
