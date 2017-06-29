import React, { Component } from 'react';
import './form.css';
import {getWeatherByCityName} from './api/current-weather';




class CityForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      city : ''
    }
  }


handleBtnClick() {
  getWeatherByCityName(this.state.city).then(currentWeather => {
    this.props.onClick(currentWeather)
  })
}

handleValueChange(event){
  const city = event.target.value
  this.setState({city}) 
}


  render() {
    return (
      <div className='form'>
        <label htmlFor="name">City:</label>
        <input type="text" value={this.state.city} onChange={(event)=>this.handleValueChange(event)}/>
        <button onClick={()=>this.handleBtnClick()}>check!</button>
      </div>


   );
  }
}


export default CityForm
