const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=${latitude},${longitude}`;
  
  request({ url, json: true }, (error, response, body) => {
    if (error) {
      callback("Unable to connect to weather service.", undefined);
    } else if (body.error) {
      callback(body.error.message, undefined);
    } else {
      const { location, current } = body;
      const message = `${location.name}: ${current.condition.text}, Temperature: ${current.temp_c}°C`;
      callback(undefined, message);
    }
  });
};

module.exports = forecast;
