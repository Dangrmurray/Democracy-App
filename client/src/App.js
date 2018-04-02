import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
//import Footer from "./components/Footer";
import Welcome from "./components/pages/Welcome";
import About from "./components/pages/About";
import Region from "./components/pages/Region";
import Bills from "./components/pages/Bills";
import BillDetail from "./components/pages/BillDetail";

import DemoForm from "./components/pages/DemoForm";

import Chart from "./components/pages/Stats";

import "./App.css";


class App extends Component {

  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.initLogin = this.initLogin.bind(this);
    this.initLogout = this.initLogout.bind(this);
    this.state = { isLoggedIn: false, userId: "" };
  }

  componentDidMount() {
    let bool = (window.sessionStorage.getItem("loggedIn"));
   if (JSON.parse(bool) === true) {
      this.setState({ isLoggedIn: true });
      this.handleLoginClick();
      console.log("logging in!!!!!!!!!!!!!!!!!!!!!!");
    }else {
      this.setState({ isLoggedIn: false });
      this.handleLogoutClick();
      console.log(window.sessionStorage.getItem("loggedIn"));
    }
  }
// <<<<<handle change in state, state controls which button is displayed>>>>>
  handleLoginClick(response) {
    this.setState({ isLoggedIn: true });
    window.sessionStorage.setItem("loggedIn", true);
    if(response) {
      console.log("Logged in? " + this.state.isLoggedIn);
      this.initLogin(response);
    }
  }
  
  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
    window.sessionStorage.setItem("loggedIn", false);
    console.log("Logged in? " + this.state.isLoggedIn);

    this.initLogout();
  }
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


  initLogin(response) {
    console.log("finding user, ID: " + response.getId());
    const userId = response.getId();
    this.setState({ userId });
    // <<<<<<Search for user in DB...>>>>>>
  }

  initLogout() {
    console.log("logging user out, ID: " +  this.state.userId);
    // <<<<Should chain to any logout functions...>>>>
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
            userId={this.state.userId}
          />
          <Route exact path="/" 
          render={(props) => this.state.isLoggedIn ? <DemoForm userId={this.state.userId} {...props} /> : <Welcome />}
          />
          <Route exact path="/about" component={About } />
          <Route exact path="/region" component={Region} />
          <Route exact path="/bills" component={Bills} />
          <Route exact path="/billdetail" component={BillDetail} />
          <Route exact path="/demoform" component={DemoForm} />
          <Route path="/billdetail/:bill_id" 
          render={(props) => (<BillDetail userId={this.state.userId} {...props} />)} 
          />
          <Route path="/stats" component={Chart} />

        </div>
      </Router>
    )
  }
}


export default App;
