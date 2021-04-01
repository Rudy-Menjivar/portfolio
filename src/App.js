import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavLinks from "./components/NavLinks"
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavLinks />
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/about" component={AboutMe} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
