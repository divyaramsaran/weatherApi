const weatherCodes = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  56: "Light freezing drizzle",
  57: "Dense freezing drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",
  66: "Light freezing rain",
  67: "Heavy freezing rain",
  71: "Slight snow fall",
  73: "Moderate snow fall",
  75: "Heavy snow fall",
  77: "Snow grains",
  80: "Slight rain showers",
  81: "Moderate rain showers",
  82: "Violent rain showers",
  85: "Slight snow showers",
  86: "Heavy snow showers",
  95: "Thunderstorm",
  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail",
};

const extractEmoji = (weatherDescription) => {
  const emojis = {
    "Clear sky": "☀️",
    "Mainly clear": "🌤️",
    "Partly cloudy": "⛅",
    Overcast: "☁️",
    Fog: "🌫️",
    "Depositing rime fog": "🌁",
    "Light drizzle": "🌦️",
    "Moderate drizzle": "🌦️",
    "Dense drizzle": "🌧️",
    "Light freezing drizzle": "🌧️",
    "Dense freezing drizzle": "🌧️",
    "Slight rain": "🌧️",
    "Moderate rain": "🌧️",
    "Heavy rain": "🌧️",
    "Light freezing rain": "🌧️",
    "Heavy freezing rain": "🌧️",
    "Slight snow fall": "🌨️",
    "Moderate snow fall": "🌨️",
    "Heavy snow fall": "🌨️",
    "Snow grains": "🌨️",
    "Slight rain showers": "🌦️",
    "Moderate rain showers": "🌦️",
    "Violent rain showers": "🌧️",
    "Slight snow showers": "🌨️",
    "Heavy snow showers": "🌨️",
    Thunderstorm: "⛈️",
    "Thunderstorm with slight hail": "⛈️",
    "Thunderstorm with heavy hail": "⛈️",
  };
  return emojis[weatherDescription] || "🌈";
};

const fetchWeather = (retries) => {
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&current_weather=true"
  )
    .then((response) => response.json())
    .then((data) => {
      const weatherCode = data.current_weather.weathercode;
      if (weatherCode === undefined) {
        console.error("Weather code is undefined");
        return;
      }
      const weatherDescription = weatherCodes[weatherCode] || "Unknown weather";
      console.log(
        "Current weather:",
        weatherDescription,
        extractEmoji(weatherDescription)
      );
    })
    .catch((error) => {
      if (retries > 0) {
        console.warn(`Fetch failed, retrying... (${retries} retries left)`);
        setTimeout(() => fetchWeather(retries - 1), 1000);
      } else {
        console.error("Failed to fetch weather data:", error);
      }
    });
};

fetchWeather();
