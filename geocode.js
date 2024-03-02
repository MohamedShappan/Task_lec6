const request = require("request");

const geocode = (address, callback) => {
  const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw`;

  request({ url: geocodeUrl, json: true }, (error, response, body) => {
    if (error) {
      callback("Unable to connect to geocode service.", undefined);
    } else if (body.message) {
      callback(body.message, undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location.", undefined);
    } else {
      const { center } = body.features[0];
      const [longitude, latitude] = center;
      callback(undefined, { longitude, latitude });
    }
  });
};

module.exports = geocode;
