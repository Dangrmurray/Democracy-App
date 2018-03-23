import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./components/pages/Welcome";
import About from "./components/pages/About";
import Region from "./components/pages/Region";
import Bills from "./components/pages/Bills";
//import DemoForm from "./components/DemoForm";
import "./App.css";


const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Welcome} />
      <Route exact path="/about" component={About} />
      <Route exact path="/region" component={Region} />
      <Route path="/bills:id" component={Bills} />
      <Footer />
    </div>
  </Router>
);

export default App;
