async function requestApi() {
  const weatherPromise = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=-16.6799&lon=-49.255&appid=",
  );

  const weatherData = await weatherPromise.json();
  console.log(weatherData);
  const weatherCelsius = fahrenheitToCelsius(weatherData.main.temp);

  document.getElementById("display-temperature").textContent = weatherCelsius;
}

function fahrenheitToCelsius(t) {
  return Math.ceil(t - 273.15);
}
requestApi();
