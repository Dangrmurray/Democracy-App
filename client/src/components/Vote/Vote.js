import React from 'react';
import './Vote.css';
import Chart from '../VoteNumChart';




class Vote extends React.Component {
  constructor(){
    super();
    this.state = {

      // add to State what would be displayed tally of the onClick 
     // think about when somebody clicks the yes delta State btn
      
      chartDataNum:{}
      
    }
  }

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
              417594,
              105162,
              95072
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
    yesVote = (event) => {
      event.preventDefault();
    }

    noVote = (event) => {
      event.preventDefault();
    }

    undecidedVote = (event) => {
      event.preventDefault();
    }
  
   
    render() {
  
      return (
        <div className="col-6 mx-auto voteBlock">
          <div className=" loggedOut">
            <h5>Login To Vote</h5>
          </div>

          <div className="loggedIn">
            <button onClick={this.yesVote} className="btn btn-success">YES</button>
            <button onClick={this.noVote} className="btn btn-danger">NO</button>
            <button onClick={this.undecidedVote} className="btn btn-secondary">UNDECIDED</button>
          </div>
          <div className="voteOverview">
            <h5>Vote Summary Graph</h5>
              <Chart chartData={this.state.chartDataNum} location="Votes" legendPosition="top"/>
            
          </div>
        </div>
      );
    }
  }
  
  export default Vote;