import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/about" component={AboutMe} />
        <Route exact path="/projects" component={Portfolio} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
