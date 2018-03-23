import React from 'react';
import './LoginControl.css';


function LoginButton(props) {
    return (
      <button className="btn btn-primary" onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button className="btn btn-primary" onClick={props.onClick}>
        Logout
      </button>
    );
  }

class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      const button = isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick} />
      );
  
      return (
        <div>
          <div isLoggedIn={isLoggedIn}></div>
          {button}
        </div>
      );
    }
  }
  
  export default LoginControl;