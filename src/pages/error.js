import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  React.useEffect(() => {
    document.title = "404 Not Found || Cristian Fernandez";
  }, []);
  return (
    <main>
      <section className="section">
        <h2 className="title">Oops! There is no page here!</h2>
        <Link className="link" to="/">
          Back Home
        </Link>
      </section>
    </main>
  );
}
