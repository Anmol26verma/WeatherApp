// Set up API key
const apiKey = "9f793029da21457d8c5183408232703";

// Function to get weather data from API
async function getWeather(city) {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=$9f793029da21457d8c5183408232703&q=$Delhi&aqi=no`);
  const data = await response.json();
  return data;
}

// Function to update UI with weather data
function updateUI(data) {
  const city = data.location.name;
  const temp = data.current.temp_c;
  const desc = data.current.condition.text;

  const cityElem = document.getElementById("city");
  const tempElem = document.getElementById("temp");
  const descElem = document.getElementById("desc");

  cityElem.textContent = city;
  tempElem.textContent = `${temp}°C`;
  descElem.textContent = desc;
}

// Function to handle form submission
async function handleSubmit(event) {
  event.preventDefault();
  const city = document.getElementById("cityInput").value;
  const data = await getWeather(city);
  updateUI(data);
}

// Add event listener to form
const form = document.getElementById("weatherForm");
form.addEventListener("submit", handleSubmit);

