function lat(callback) {
  navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      callback.call(null, lat, lon);
  }, function (error) {
      alert("Something went wrong: ", error);
  });
}

export default function getPosition() {
  lat(function (latitude, longitude) {
      return ([latitude, longitude]);
  });
}