import React from "react";

export default function About() {
  React.useEffect(() => {
    document.title = "About me || Cristian Fernandez";
  }, []);
  return (
    <main>
      <section className="section">
        <h2 className="title">About me</h2>
        <p>
          I'm a geologist from Colombia, graduated in 2020. My
          interests in geology are hydrogeology and urban subsidence,
          specifically about groundwater flow modeling and how
          groundwater has an impact in urban subsidence.
        </p>
        <p>
          Right now I'm learning web development using online
          resources like the Mozilla Developer Network Web Docs, from
          which I did the Front-end career development path, which is
          an incredible source of information and has been extremely
          helpful with my learning, also, I've been doing some courses
          in Coursera with the University of Michigan to consolidate
          my knowledge of Front-end development.
        </p>
        <p>
          Right now I know Python, Javascript, HTML and CSS, being
          Python my most proficient language, and I have an interest
          in learning Typescript in the future when I get more
          proficient with Javascript. As for frameworks, I've been
          learning React, Tailwind CSS and a bit of Bootstrap, and I
          have an interest in Svelte, Chakra UI, and Next.js which I
          will probably try after I get proficient in React and its
          surrounding libraries.
        </p>
        <p>
          For this portfolio I used React, react-router and
          react-icons.
        </p>
      </section>
    </main>
  );
}
