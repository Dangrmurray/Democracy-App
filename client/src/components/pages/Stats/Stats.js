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
              94,
              45,
              60,
              19,
              62,
              2
            ],

           
            backgroundColor:[
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)'
            ]
          },

          {
            label:'No',
            data:[
              18,
              13,
              7,
              5,
              23,
              9
            ],
            backgroundColor:[
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)'
            ]
          },

           {
            label:'Undecided',
            data:[
              44,
              15,
              10,
              19,
              12,
              92
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
              41,
              18,
              15,
              10,
              10,
              9
            ],
            backgroundColor:[
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)'
            ]
          },

          {
            label:'No',
            data:[
              61,
              31,
              12,
              29,
              10,
              2
            ],
            backgroundColor:[
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)'
            ]
          },

           {
            label:'Undecided',
            data:[
              4,
              17,
              56,
              76,
              23,
              12
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
              33,
              45,
              21,
              36
            ],
            backgroundColor:[
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)'
            ]
          },

          {
            label:'No',
            data:[
              78,
              102,
              32,
              43
            ],
            backgroundColor:[
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)'
            ]
          },

           {
            label:'Undecided',
            data:[
              110,
              88,
              92,
              72
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
              57,
              47,
              32,
              19,
              7,
              78
            ],
            backgroundColor:[
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)'
            ]
          },

          {
            label:'No',
            data:[
              78,
              56,
              23,
              89,
              75,
              23
            ],
            backgroundColor:[
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)'
            ]
          },

           {
            label:'Undecided',
            data:[
              56,
              72,
              153,
              34,
              105,
              92
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
              109,
              207,
              305,
              765,
              343,
              88
            ],
            backgroundColor:[
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)'
            ]
          },

          {
            label:'No',
            data:[
              56,
              45,
              60,
              19,
              62,
              72
            ],
            backgroundColor:[
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)'
            ]
          },

           {
            label:'Undecided',
            data:[
              4,
              45,
              30,
              59,
              12,
              32
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
              35,
              1,
              12,
              17,
              8
            ],
            backgroundColor:[
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)'
            ]
          },

          {
            label:'No',
            data:[
              94,
              15,
              30,
              19,
              28
            ],
            backgroundColor:[
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)'
            ]
          },

           {
            label:'Undecided',
            data:[
              12,
              56,
              21,
              15,
              20
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