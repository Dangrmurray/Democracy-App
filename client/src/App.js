import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./components/pages/Welcome";
import About from "./components/pages/About";
import Region from "./components/pages/Region";
import Bills from "./components/pages/Bills";
import "./App.css";

class App extends Component {

    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.findUser = this.findUser.bind(this);
      this.state = {isLoggedIn: false, button: "Login"};
    }

    handleLoginClick() {
      this.setState({isLoggedIn: true, button: "Logout"});
      this.findUser();
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false, button: "Login"});
      this.initLogout();
    }

    findUser() {
      console.log("finding user...");
    }

    initLogout() {
      console.log("logging user out...");
    }

  render() {

    return (
      <Router>
        <div>
          <Header 
          handleLoginClick={this.handleLoginClick}
          handleLogoutClick={this.handleLogoutClick}
          isLoggedIn={this.state.isLoggedIn}
          button={this.state.button}
          />
          <Route exact path="/" component={Welcome} />
          <Route exact path="/about" component={About} />
          <Route exact path="/region" component={Region} />
          <Route exact path="/bills" component={Bills} />
          <Route exact path="/region/bills/:id" component={Bills} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
