import React from 'react';
import './LoginControl.css';

// Login Control Component
const LoginControl = (props) => (
  
        <div>
          <button className="btn btn-primary" onClick={ props.isLoggedIn ? props.handleLogoutClick : props.handleLoginClick }>
          {props.button}
          </button>
        </div>
      );
  
  
  export default LoginControl;