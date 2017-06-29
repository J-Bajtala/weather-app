import React, { Component } from 'react';
import './weather-details.css';
import {kelvinToCelcius} from './temperature-service'

class WeatherInfo extends Component {
  render() { console.log(this.props.weather)
    if (this.props.weather === null){
      return this.renderNoInfo()
    }
    const{weather}=this.props
    return (
      <div className="weatherInfo">
        <p>Temperatura:{kelvinToCelcius(weather.temp)}</p>
        <p>{weather.visibility}</p>
      </div>
    );
  }
  renderNoInfo(){
    return <div className="weatherInfo">Brak pogody!</div>
  }
}

export default WeatherInfo
