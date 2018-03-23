import React from 'react';
import LoginControl from "../LoginControl";
import './Header.css';


const Header = (props) => (
    <nav className="navbar navbar-expand-lg bg-light">
      <a className="navbar-brand" href="/">DemocracyNow or Stuff</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Bills <span className="sr-only">(current)</span></a>
          </li>
          <LoginControl></LoginControl>
        </ul>
      </div>
  </nav>
) 
export default Header;