//import React from 'react';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'; //Include Heder
import Footer from './Footer'; //Include Footer
import React, { Component } from 'react';
// import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries} from 'react-vis';

class App extends React.Component {
  
  render()  {
    const data = [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 0},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0}
    ];
    return (
      
      <div className="main">
        <Header></Header>
        <div className="bodyApp">
          <div className="title">
          <h1>Carbon Dioxide (CO2) Emissions</h1>
          <p>Total Emissions in 2019 = 6,558 Million Metric Tons of CO2 equivalent. Percentages may not add up to 100% due to independent rounding. ... The largest source of greenhouse gas emissions from human activities in the United States is from burning fossil fuels for electricity, heat, and transportation.</p>
          </div>
          {/* <XYPlot height={300} width={300}>
                <LineSeries data={data} />
              </XYPlot> */}
          <div className="aboutTeam">
              <p> Hi, I`m Oleksa Sarnatskyi </p>
              <p>I take part in this competition because I think this is interesting event to fast code.</p>
              <p>So, for me this is a change to blow out dust from my maind and come back in IT.</p>
              <p>Tnx ;)</p>
          </div>
        </div>
          <Footer></Footer>
      </div>
   )
  };
}
export default App;