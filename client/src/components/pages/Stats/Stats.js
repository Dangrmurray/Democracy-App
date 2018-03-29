import React, { Component } from 'react';
import './Stats.css';
import Chart from '../../Chart';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartDataAge:{},
      chartDataIncome:{},
      chartDataGender:{},
      chartDataEducation:{},
      chartDataRace:{},
      chartDataRegion:{}
      
    }
  }

  componentWillMount(){
    this.getChartDataAge();
    this.getChartDataIncome();
    this.getChartDataGender();
    this.getChartDataEducation();
    this.getChartDataRace();
    this.getChartDataRegion();
    
  }

  getChartDataAge(){
    // Ajax calls here
    this.setState({
      chartDataAge:{
        labels: ['Under 18yrs', '18-34yrs', '35-50yrs', '51-69yrs', '70-87yrs', '88+yrs'],
        datasets:[
          {
            label:'Yes',
            data:[
              417594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)'
            ]
          },

          {
            label:'No',
            data:[
              614394,
              231045,
              313060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)'
            ]
          },

           {
            label:'Undecided',
            data:[
              417594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)'
            ]
          }
        ]
      }
    });
  }


  getChartDataIncome(){
    // Ajax calls here
    this.setState({
      chartDataIncome:{
        labels: ['$0-$9,524', '$9,525-$38,699', '$38,700-$82,499', '$82,500-$157,499', '$157,500-$199,999', '$200,000-$499,999', ],
        datasets:[
          {
            label:'Yes',
            data:[
              417594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)'
            ]
          },

          {
            label:'No',
            data:[
              614394,
              231045,
              313060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)'
            ]
          },

           {
            label:'Undecided',
            data:[
              417594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)'
            ]
          }
        ]
      }
    });
  }


   getChartDataGender(){
    // Ajax calls here
    this.setState({
      chartDataGender:{
        labels: ['Female', 'Male', 'Trans', 'Other', ],
        datasets:[
          {
            label:'Yes',
            data:[
              417594,
              181045,
              153060,
              106519
            ],
            backgroundColor:[
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)'
            ]
          },

          {
            label:'No',
            data:[
              614394,
              231045,
              313060,
              106519
            ],
            backgroundColor:[
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)'
            ]
          },

           {
            label:'Undecided',
            data:[
              417594,
              181045,
              153060,
              106519
            ],
            backgroundColor:[
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)'
            ]
          }
        ]
      }
    });
  }


  getChartDataEducation(){
    // Ajax calls here
    this.setState({
      chartDataEducation:{
        labels: ['Some High School', 'High School Diploma/Equivalent', 'Some College', 'Bachelor Degree', 'PHD', 'Vocational/Trade School', ],
        datasets:[
          {
            label:'Yes',
            data:[
              417594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)'
            ]
          },

          {
            label:'No',
            data:[
              614394,
              231045,
              313060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)'
            ]
          },

           {
            label:'Undecided',
            data:[
              417594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)'
            ]
          }
        ]
      }
    });
  }

  getChartDataRace(){
    // Ajax calls here
    this.setState({
      chartDataRace:{
        labels: ['Asain', 'Black/African American', 'Hispanic/Latino', 'White', 'PHD', 'Vocational/Trade School', ],
        datasets:[
          {
            label:'Yes',
            data:[
              417594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)'
            ]
          },

          {
            label:'No',
            data:[
              614394,
              231045,
              313060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)'
            ]
          },

           {
            label:'Undecided',
            data:[
              417594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)'
            ]
          }
        ]
      }
    });
  }

  getChartDataRace(){
    // Ajax calls here
    this.setState({
      chartDataRace:{
        labels: ['Asain', 'Black/African American', 'Hispanic/Latino', 'White', 'PHD', 'Vocational/Trade School', ],
        datasets:[
          {
            label:'Yes',
            data:[
              417594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)'
            ]
          },

          {
            label:'No',
            data:[
              614394,
              231045,
              313060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)'
            ]
          },

           {
            label:'Undecided',
            data:[
              417594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)'
            ]
          }
        ]
      }
    });
  }

  getChartDataRegion(){
    // Ajax calls here
    this.setState({
      chartDataRegion:{
        labels: ['Western', 'Mid-Western', 'Southern', 'Eastern', 'PHD', 'Vocational/Trade School', ],
        datasets:[
          {
            label:'Yes',
            data:[
              417594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)',
              'rgba(119, 191, 198, 1)'
            ]
          },

          {
            label:'No',
            data:[
              614394,
              231045,
              313060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)',
              'rgba(238, 38, 37, 1)'
            ]
          },

           {
            label:'Undecided',
            data:[
              417594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)'
            ]
          }
        ]
      }
    });
  }


  render() {
    return (
      <div className="App">
        <Chart chartData={this.state.chartDataAge} location="Age" legendPosition="bottom"/>
        <Chart chartData={this.state.chartDataIncome} location="Income" legendPosition="bottom"/>
        <Chart chartData={this.state.chartDataGender} location="Gender" legendPosition="bottom"/>
        <Chart chartData={this.state.chartDataEducation} location="Education" legendPosition="bottom"/>
        <Chart chartData={this.state.chartDataRace} location="Race" legendPosition="bottom"/>
        <Chart chartData={this.state.chartDataRegion} location="Region" legendPosition="bottom"/>
      </div>
    );
  }
}

export default App;