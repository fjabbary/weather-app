const weather = new Weather('Dallas', 'TX');
document.addEventListener('DOMContentLoaded', getData)

function getData() {
  weather.getWeather();
}

document.getElementById('save-changes').addEventListener('click', function () {
  let city = document.getElementById('city');
  let state = document.getElementById('state');

  weather.changeLocation(city.value, state.value);
  weather.getWeather();

  city.value = '';
  state.value = '';
  $('#LocModal').modal('hide');
})

