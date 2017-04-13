import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';    // added axios
import Day from './Day';      // added Day 

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      weather:[],
      value: '',
    }
  }

  componentDidMount(){                // runs default, don't need.  cincinnati is inital
    this.getWeather('cincinnati',1);
  }           

  getNewWeather(e){                       // e = event.  This updates data
    e.preventDefault();
    this.getWeather(this.state.value,7);
  }


  getWeather(city){
    axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=imperial&cnt=6&APPID=b52a2c029fff494c5032a2860ad870f2`)
    .then((response)=> {
      this.setState({
        weather: response.data.list,
      })
    });
  }

  changedInput(e){
    this.setState({
      value:e.target.value,
    })
  }

  render() {                  
                                        // map is functional, will return data (forEach would only loop thru, not return data
    const weather = this.state.weather.map(day=>{
       return (
         <Day key={day.dt} data={day} />
       )
    })
                    // weather portion starts with AppWeather container 
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>

        <div className="AppWeather container">   
          <h3>🔆 Forecast</h3>

          <form onSubmit={this.getNewWeather.bind(this)}>
            <input className="form-control" onChange={this.changedInput.bind(this)} type="text" placeholder="Enter City" />
            <button type="submit" className="btn btn-primary">Get Weather</button>
          </form>

          <div className="WeatherResults row col-md-12">
            {weather}
          </div>

        </div>
      </div>
    );
  }
}

export default App;