import React from 'react';
import './Vote.css';
import Chart from '../VoteNumChart';
// import API from "../../utils/API.js";

class Vote extends React.Component {

  constructor(props){
    super(props);
    this.state = {   
      chartDataNum:{},
      isLoggedIn: false,
      voted: false
    } 
    console.log(props)
  }
  
  componentWillMount(){
    this.getChartDataNum();
    let loggedIn = JSON.parse(window.sessionStorage.getItem("loggedIn"));
    let voted = JSON.parse(window.sessionStorage.getItem("voted"));
    let bills = JSON.parse(window.localStorage.getItem("votedBills"));
    
    if (JSON.parse(loggedIn) === true) {
      this.setState({ isLoggedIn: true });
    }else {
      this.setState({ isLoggedIn: false });
    };

    if (JSON.parse(voted) === true) {
      this.setState({ voted: true });
    }else {
      this.setState({ voted: false });
    };
    if (bills) {
      if(bills.includes(window.sessionStorage.getItem("bill"))) {
      }
    }
  }

  getChartDataNum(){
    let yes = JSON.parse(window.sessionStorage.getItem("yes"));
    let no = JSON.parse(window.sessionStorage.getItem("no"));
    let undecided = JSON.parse(window.sessionStorage.getItem("yes"));

    this.setState({
      chartDataNum:{
        labels: ['Yes', 'No', 'Undecided',],
        datasets:[
          {
            label:'Votes',
            data:[
              yes,
              no,
              undecided
            ],
            backgroundColor:[
              'rgba(119, 191, 198, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(255, 240, 200, 1)'
            ]
          },
        ]
      }
    });
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
              (!this.state.voted) 
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
          <div>
              <div className="voteOverview">
                <Chart chartData={this.state.chartDataNum} location="Votes" legendPosition="top"/>
              </div>
            </div>
        </div>
        </div>
      )
    }
  }
  
  export default Vote;