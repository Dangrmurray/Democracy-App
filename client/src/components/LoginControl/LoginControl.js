import React from 'react';
import { Link } from "react-router-dom";
import './LoginControl.css';
import { GoogleAPI, GoogleLogin, GoogleLogout } from "react-google-oauth";


// Login Control Component
const LoginControl = (props) => (
    
        <div>
        <GoogleAPI 
        clientId="973206179313-tic92hoj77kbd8q3ck7lml8gvlcj5np6.apps.googleusercontent.com"
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