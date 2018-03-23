import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./components/pages/Welcome";
import About from "./components/pages/About";
import Bills from "./components/pages/Bills";
//import DemoForm from "./components/DemoForm";
import "./App.css";


const App = () => (
  <Router>
    <div>
      <div className="testHeader">( Test Header used for Routing )  
      <Header />
        <a href="/">|||||||  Home  </a>
        <a href="/bills">||  Bills </a>
        <a href="/about">||  About</a>
      </div>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/about" component={About} />
      <Route exact path="/bills" component={Bills} />
      <Footer />
    </div>
  </Router>
);

export default App;
