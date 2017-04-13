import React, { Component } from 'react';
import moment from "moment";

class Day extends Component {
	render(){ 
		let url=`http://openweathermap.org/img/w/${this.props.data.weather[0].icon}.png`
		return(
			<div key={this.props.data.dt*1000} className="col-md-2 day">
				<h4>{moment(this.props.data.dt*1000).format('dddd')}</h4>
          		<p>High: {this.props.data.temp.max}℉</p>
          		<p>Low: {this.props.data.temp.min}℉</p>
          		<p>Conditions: {this.props.data.weather[0].main}</p>
				<img src={url}/>
         	</div>
        )
	}
 }

 export default Day;