import React from 'react';
import './Vote.css';
import API from "../../utils/API.js";
import Chart from '../VoteNumChart';

class Vote extends React.Component {

  constructor(props){
    super(props);
    this.state = {   
      isLoggedIn: false
    } 
  }
  
  componentWillMount(){
    this.getChartDataNum();
    let loggedIn = JSON.parse(window.sessionStorage.getItem("loggedIn"));
    
    if (JSON.parse(loggedIn) === true) {
      this.setState({ isLoggedIn: true });
    }else {
      this.setState({ isLoggedIn: false });
    };

  }

  getChartDataNum(){

     this.setState({ chartUpdate : false });

    this.setState({
      chartDataNum:{
        labels: ['Yes', 'No', 'Undecided',],
        datasets:[
          {
            label:'Votes',
            data:[
            this.props.votes_yes.length,
            this.props.votes_no.length,
            this.props.votes_undecided.length
            ],
            backgroundColor:[
              'rgba(0, 123, 255, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(255, 240, 200, 1)'
            ]
          },
        ]
      }
    });
  }

  render() {

    let chartData = this.state.chartDataNum;
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
                  <div className="voteOverview">
                    <Chart chartData={chartData} 
                    redraw
                    location="Votes" 
                    legendPosition="top"/>
                  </div>
            </div>
        </div>
      )
    }
  }
  
  export default Vote;