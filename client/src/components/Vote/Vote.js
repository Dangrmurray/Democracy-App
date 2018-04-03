import React from 'react';
import './Vote.css';
import Chart from '../VoteNumChart';
import API from "../../utils/API.js";

//class Vote extends React.Component {
  //constructor(props){
   // super(props);
    //this.state = {   
     // chartDataNum:{}
    //} 
  //}
  
  componentWillMount(){
    this.getChartDataNum();
  }

  getChartDataNum(){
    // Ajax calls here
    this.setState({
      chartDataNum:{
        labels: ['Yes', 'No', 'Undecided',],
        datasets:[
          {
            label:'Votes',
            data:[
              67,
              567,
              987
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
  
  voteYes = () => {
    API.voteYes(this.props.bill_id)
			.then(res => {
				console.log('data')
      })
    // Add userid to yes vote db array
    // Display vote graph
  }
  
  voteNo(){
    console.log('You voted No');
    // Add userid to no vote db array
    // Display vote graph
  }

  voteUndecided(){
    console.log('You voted Perhaps?');
    // Add userid to undecided vote db array
    // Display vote graph
  }
   
    render() {
      console.log(this.props.userId)
      return (
       
        <div className="col-6 mx-auto voteBlock">
          {
          (!this.props.userId) 
          ? <div className=" loggedOut">
              <h5>Login To Vote</h5>
            </div>
          : <div>
              <div className="loggedIn">
                <button onClick={this.voteYes} className="btn btn-success">YES</button>
                <button onClick={this.voteNo} className="btn btn-danger">NO</button>
                <button onClick={this.voteUndecided} className="btn btn-secondary">UNDECIDED</button>
              </div>
              
              <div className="voteOverview">
                <h5>Vote Summary Graph</h5>
                  <Chart chartData={this.state.chartDataNum} location="Votes" legendPosition="top"/>
              </div>
            </div>
          }
        </div>
      );
    }
  }
  
  export default Vote;
