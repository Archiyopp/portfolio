import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import AccessibleNavigationAnnouncer from "./components/AccesibleNavigationAnnouncer";
import Loader from "./components/loader";
import Navbar from "./components/navbar";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
const Error = lazy(() => import("./pages/error"));
const Projects = lazy(() => import("./pages/Projects"));
const Pokemon = lazy(() => import("./pages/Pokemon"));
const PokemonChild = lazy(() => import("./components/PokemonChild"));

function App() {
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Navbar />
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </Router>
    </>
  );
}

export default App;
