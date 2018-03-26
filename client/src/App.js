import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./components/pages/Welcome";
import About from "./components/pages/About";
import Region from "./components/pages/Region";
import Bills from "./components/pages/Bills";
import BillDetail from "./components/pages/BillDetail";
import "./App.css";


const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Welcome} />
      <Route exact path="/about" component={About} />
      <Route exact path="/region" component={Region} />
      <Route exact path="/bills" component={Bills} />
      <Route exact path="/billdetail" component={BillDetail} />
      <Footer />
    </div>
  </Router>
);

export default App;
