import React from 'react';
import './Vote.css';

class Vote extends React.Component {

  constructor(props){
    super(props);
    this.state = {   
      isLoggedIn: false
    } 
  }
  
  componentWillMount(){
    let loggedIn = JSON.parse(window.sessionStorage.getItem("loggedIn"));
    
    if (JSON.parse(loggedIn) === true) {
      this.setState({ isLoggedIn: true });
    }else {
      this.setState({ isLoggedIn: false });
    };

  }

  render() {

      return (
       
        <div className="col-6 mx-auto voteBlock">
            {
            (!this.state.isLoggedIn) ? 
              <div className=" loggedOut">
                <h5>Login To Vote</h5>
              </div>
            : [
                (!this.props.voted) 
                  ? (
                      <div className="loggedIn">
                  <button onClick={this.props.voteYes} className="btn btn-success btn-yes">YES</button>
                  <button onClick={this.props.voteNo} className="btn btn-danger btn-no">NO</button>
                  <button onClick={this.props.voteUndecided} className="btn btn-secondary btn-maybe">UNDECIDED</button>
                </div>)
                  : (<div>
                      <p> Thanks for voting! </p>
                    </div>)
              ]
            }
            <div>
              {this.props.children}
            </div>
        </div>
      )
    }
  }
  
  export default Vote;
