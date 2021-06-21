import React from "react";
import photo from "../selfie1.webp";
import photo11 from "../selfie1j.jpg";
import photo22 from "../selfie2j.jpg";
import photo2 from "../selfie2.webp";

function Home() {
  React.useEffect(() => {
    document.title = "Home || Cristian Fernandez";
  }, []);
  return (
    <main>
      <section className="section">
        <h1 className="title">Hi, I'm Cristian Fernandez</h1>
        <div className="description">
          <picture className="image-container">
            <source
              type="image/webp"
              media="(max-width: 799px)"
              srcSet={photo2}
            />
            <source
              type="image/jpg"
              media="(max-width: 799px)"
              srcSet={photo22}
            />
            <source type="image/webp" srcSet={photo} />
            <img
              type="image/jpg"
              src={photo11}
              alt="Cristian Fernandez"
              className="photo"
            />
          </picture>
          <p>
            I'm a geologist from Colombia and I'm just beginning my
            career in web development. I'm currently learning
            programming from the MinTic so I can get solid
            fundamentals on programming and translate them to web
            development.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
