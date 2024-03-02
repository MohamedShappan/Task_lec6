const forecast = require("./forecast");
const geocode = require("./geocode");
const country = process.argv[2];

geocode(country, (geocodeError, geocodeData) => {
  if (geocodeError) {
    console.log("Error fetching geocode data:", geocodeError);
  } else {
    console.log("Geocode data:", geocodeData);
    forecast(geocodeData.latitude, geocodeData.longitude, (forecastError, forecastData) => {
      if (forecastError) {
        console.log("Error fetching forecast data:", forecastError);
      } else {
        console.log("Forecast data:", forecastData);
      }
    });
  }
});
