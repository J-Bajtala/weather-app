import axios from 'axios'


const apiKey = '89bb6c136790199f6e9071520b651a76';
const baseUrl = `http://api.openweathermap.org/data/2.5/weather?appId=${apiKey}`;

const getWeatherByCityName = (cityname) => {

    return axios.get(`${baseUrl}&q=${cityname}`)
    .then(result => {
      console.log(result)
      return mapResponse(result.data)
    });
}

const mapResponse = (response) => {
  return {
    temp: response.main.temp,
    visibility: response.visibility,
    humidity: response.main.humidity,
    minTemp: response.main.temp_min,
    maxTemp: response.main.temp_max,
    description: response.weather.description




  }
}


export {getWeatherByCityName}
