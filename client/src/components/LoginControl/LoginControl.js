import React from 'react';
import { Link } from "react-router-dom";
import './LoginControl.css';
import { GoogleAPI, GoogleLogin, GoogleLogout } from "react-google-oauth";


// Login Control Component
const LoginControl = (props) => (
    
        <div>
        <GoogleAPI 
        clientId="470848001164-2l4g92q85okvv703tf7ptnllvtci31km.apps.googleusercontent.com"
        fetch_basic_profile="true" >
          <div>
          { props.isLoggedIn ?
            <Link to="/">
              <GoogleLogout 
                onLogoutSuccess={props.handleLogoutClick} 
            	/>
            </Link>
            : <GoogleLogin 
	          	onLoginSuccess={props.handleLoginClick} 
          	/> 
          }
          </div> 
        </GoogleAPI>
        </div>
      );
  
  
  export default LoginControl;