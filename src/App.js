import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/"]}>
            <AboutMe />
          </Route>
          <Route exact path={["/about"]}>
            <AboutMe />
          </Route>
          <Route exact path={["/portfolio"]}>
            <Portfolio />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
