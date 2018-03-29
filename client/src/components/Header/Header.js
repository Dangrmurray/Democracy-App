import React from 'react';
import './Header.css';
import LoginControl from "../LoginControl";


const Header = (props) => (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">Bill Whip</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item"><a className="nav-link" href="/bills">Bills</a></li>
          <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
          <LoginControl 
          handleLoginClick={props.handleLoginClick}
          handleLogoutClick={props.handleLogoutClick}
          isLoggedIn={props.isLoggedIn}
          />
        </ul>
      </div>
  </nav>
)
export default Header;