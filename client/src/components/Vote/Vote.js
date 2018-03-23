import React from 'react';
import './Vote.css';


function LoginToVote(props) {
    return (
      <button className="btn btn-primary" onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function Vote(props) {
    return (
      <button className="btn btn-primary" onClick={props.onClick}>
        Logout
      </button>
    );
  }
  
  function Voted(props) {
    return (
      <button className="btn btn-primary" onClick={props.onClick}>
        Logout
      </button>
    );
  }

class Vote extends React.Component {
  
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
          {button}
        </div>
      );
    }
  }
  
  export default Vote;