import React from "react";
import { social } from "../data";
export default function Contact() {
  React.useEffect(() => {
    document.title = "Contact || Cristian Fernandez";
  }, []);
  return (
    <main>
      <section className="section">
        <h2 className="title">Contact</h2>
        <p>
          I'm seeking job opportunities as a geologist or as a web
          developer, hopefully one where I can integrate both areas,
          feel free to reach out to me with my email
          (crafernandezbe@unal.edu.co) or through one of the platforms
          below:
        </p>
        <ul className="social-icons social-link-container">
          {social.map((socialIcon) => {
            const { id, url, icon, label } = socialIcon;
            return (
              <li key={id}>
                <a
                  href={url}
                  aria-label={label}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="social-link"
                >
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
