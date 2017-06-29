const kelvinConstant = 273.15;
const fahrenheitConstant = 32;
const kfConstant = 459.67;


const kelvinToCelcius = (kelvin) => (Math.floor(kelvin * 10 - kelvinConstant * 10) / 10);


export {kelvinToCelcius}
    // export {
    //     celciusToKelvin: function(celcius){
    //         return (celcius + kelvinConstant);
    //     },
    //     kelvinToCelcius: function(kelvin){
    //         return (kelvin * 10 - kelvinConstant * 10) / 10;
    //     },
    //     celciusToFahrenheit: function(celcius){
    //         return celcius * (9/5) + fahrenheitConstant;
    //     },
    //     fahrenheitToCelcius: function(fahrenheit){
    //         return (fahrenheit - fahrenheitConstant) * (5/9);
    //     },
    //     fahrenheitToKelvin: function(fahrenheit){
    //         return (fahrenheit * 10 + kfConstant * 10) * (5/9) / 10;
    //     },
    //     kelvinToFahrenheit: function(kelvin){
    //         var strValue = ((kelvin * (9/5)) - kfConstant).toFixed(10);
    //         return parseFloat(strValue);
    //     }
    //   }
