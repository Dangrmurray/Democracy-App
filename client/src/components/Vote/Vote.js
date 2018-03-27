import React from 'react';
import './Vote.css';




class Vote extends React.Component {
  
   
    render() {
  
      return (
        <div className="col-6 mx-auto voteBlock">
          <div className=" loggedOut">
            <h5>Login To Vote</h5>
          </div>

          <div className="loggedIn">
            <button className="btn btn-success">YES</button>
            <button className="btn btn-danger">NO</button>
            <button className="btn btn-secondary">UNDECIDED</button>
          </div>
          <div className="voteOverview">
            <h5>Vote Summary Graph</h5>
          </div>
        </div>
      );
    }
  }
  
  export default Vote;