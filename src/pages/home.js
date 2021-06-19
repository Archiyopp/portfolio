import React from "react";

function Home() {
  React.useEffect(() => {
    document.title = "Home || Cristian Fernandez";
  }, []);
  return (
    <main>
      <section className="section">
        <h1 className="title">Hi, I'm Cristian Andres Fernandez</h1>
        <p>
          I'm a geologist from Colombia and I'm just beginning my
          career in web development. I'm currently learning
          programming from the MinTic so I can get solid fundamentals
          on programming and translate it to web development.
        </p>
      </section>
    </main>
  );
}

export default Home;
