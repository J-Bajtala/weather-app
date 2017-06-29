import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './App';
import registerServiceWorker from './registerServiceWorker';
import CityForm from './cityform.js'
import WeatherInfo from './weather-details'



class Root extends Component {
  constructor(props){
    super(props)
    this.state = {
      weather: null
    }
  }
  saveWeather(currentWeather){
    this.setState({
      weather: currentWeather
    })

  }

  render(){
    return (
      <div>
      <Header />
      <CityForm onClick={(currentWeather)=>this.saveWeather(currentWeather)}/>
      <WeatherInfo weather = {this.state.weather}/>
      </div>)
  }

}


ReactDOM.render(
  <Root/>,
  document.getElementById('root'));
registerServiceWorker();
