import React from 'react';
import './Vote.css';
import Chart from '../VoteNumChart';




class Vote extends React.Component {
<<<<<<< HEAD
  constructor(){
    super();
    this.state = {

      // add to State what would be displayed tally of the onClick 
     // think about when somebody clicks the yes delta State btn
      
=======
  constructor(props){
    super(props);
    this.state = {   
>>>>>>> d9fe48a7c45aac8769cce5704fbaf5b6f030b5c4
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
<<<<<<< HEAD
    yesVote = (event) => {
      event.preventDefault();
    }

    noVote = (event) => {
      event.preventDefault();
    }

    undecidedVote = (event) => {
      event.preventDefault();
    }
=======

  voteYes(){
    console.log('You voted Yes');
  }
>>>>>>> d9fe48a7c45aac8769cce5704fbaf5b6f030b5c4
  
  voteNo(){
    console.log('You voted No');
  }

  voteUndecided(){
    console.log('You voted Perhaps?');
  }
   
    render() {
      console.log(this.props.userId)
      return (
       
        <div className="col-6 mx-auto voteBlock">
<<<<<<< HEAD
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
=======
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
>>>>>>> d9fe48a7c45aac8769cce5704fbaf5b6f030b5c4
        </div>
      );
    }
  }
  
  export default Vote;