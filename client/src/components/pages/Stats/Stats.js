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
        labels: ['<$9,524', '<$38,699', '<-$82,499', '<$157,499', '<$199,999', '<$499,999', ],
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
        labels: ['Some HS', 'HS Dip/Equiv', 'Some Coll', 'Bachelor', 'PHD', 'Vocational/Trade', ],
        datasets:[
          {
            label:'Yes',
            data:[
              997594,
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
        labels: ['Asain', 'Black/Af. Am.', 'Hisp/Lat', 'White', 'Native Am/Pac Isl', 'Am. In./AK Native', ],
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
        labels: ['Western', 'Mid-Western', 'Southern', 'North-Eastern', 'South-Eastern' ],
        datasets:[
          {
            label:'Yes',
            data:[
              417594,
              181045,
              153060,
              106519,
              879832
            ],
            backgroundColor:[
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
              283779
            ],
            backgroundColor:[
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
              467838
            ],
            backgroundColor:[
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
      <div className="App container">
        <div className="row">
        <div className="AgeChart col-6">
          <Chart chartData={this.state.chartDataAge} location="Age" legendPosition="bottom"/>
        </div>
        <div className="IncomeChart col-6">
          <Chart chartData={this.state.chartDataIncome} location="Income" legendPosition="bottom"/>
        </div>
        <div className="GenderChart col-6">
          <Chart chartData={this.state.chartDataGender} location="Gender" legendPosition="bottom"/>
        </div>
        <div className="RegionChart col-6">
          <Chart chartData={this.state.chartDataRegion} location="Region" legendPosition="bottom"/>
        </div>
        <div className="EducationChart col-6">
          <Chart chartData={this.state.chartDataEducation} location="Education" legendPosition="bottom"/>
        </div>
        <div className="RaceChart col-6">
          <Chart chartData={this.state.chartDataRace} location="Race" legendPosition="bottom"/>
        </div>
        
        </div>
      </div>
    );
  }
}

export default App;