import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Error from "./pages/error";
import Navbar from "./components/navbar";
import Projects from "./pages/Projects";
import Pokemon from "./pages/Pokemon";
import PokemonChild from "./components/PokemonChild";
import AccessibleNavigationAnnouncer from "./components/AccesibleNavigationAnnouncer";
function App() {
  return (
    <div>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/projects/pokemon">
            <Pokemon />
          </Route>
          <Route path="/projects/pokemon/:name">
            <PokemonChild />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
