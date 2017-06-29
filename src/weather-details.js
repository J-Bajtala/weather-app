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

        <p>Temperature: {kelvinToCelcius(weather.temp)}℃</p>
        <p>Visibility: {weather.visibility} m</p>
        <p>Humidity: {weather.humidity} %</p>
        <p>Min Temperature: {kelvinToCelcius(weather.minTemp)} ℃</p>
        <p>Max Temperature: {kelvinToCelcius(weather.maxTemp)} ℃</p>

      </div>
    );
  }
  renderNoInfo(){
    return <div className="weatherNoInfo">Type your city to check the weather</div>
  }
}

export default WeatherInfo
