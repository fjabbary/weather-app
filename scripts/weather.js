
class Weather {
  constructor(city, state) {
    this.city = city;
    this.state = state;
  }

  getWeather() {
    fetch(`http://api.wunderground.com/api/4a462114581b611c/conditions/q/${this.state}/${this.city}.json`)
      .then(res => res.json())
      .then(data => {
        const result = data.current_observation;
        document.getElementById('w-location').innerText = result.display_location.full;
        document.getElementById('w-desc').innerText = result.weather;
        document.getElementById('w-string').innerText = result.feelslike_string;
        document.getElementById('w-icon').setAttribute('src', result.icon_url);
        document.getElementById('w-icon-desc').innerText = result.icon;

        document.getElementById('w-humidity').innerText = result.relative_humidity;
        document.getElementById('w-dew-point').innerText = result.dewpoint_string;
        document.getElementById('w-feels-like').innerText = result.feelslike_string;
        document.getElementById('w-wind').innerText = result.wind_string;
      })
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}

