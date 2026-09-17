
import { useState } from "react";
import "./App.css";

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Search weather
  const searchWeather = async () => {

    if (city.trim() === "") {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {

      /*
       * STEP 1
       * Convert city name into latitude and longitude
       */

      const locationResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          city
        )}&count=1&language=en&format=json`
      );

      if (!locationResponse.ok) {
        throw new Error("Unable to find location.");
      }

      const locationData = await locationResponse.json();

      if (!locationData.results || locationData.results.length === 0) {
        throw new Error("City not found.");
      }

      const place = locationData.results[0];

      const latitude = place.latitude;
      const longitude = place.longitude;

      setLocation(place);


      /*
       * STEP 2
       * Get weather using latitude and longitude
       */

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=sunrise,sunset&timezone=auto`
      );

      if (!weatherResponse.ok) {
        throw new Error("Unable to fetch weather data.");
      }

      const weatherData = await weatherResponse.json();

      setWeather(weatherData);

    } catch (err) {

      setError(err.message);

    } finally {

      setLoading(false);

    }
  };


  /*
   * Convert Open-Meteo weather code
   * into readable weather information
   */

  const getWeatherInfo = (code) => {

    if (code === 0) {
      return {
        description: "Clear Sky",
        icon: "☀️"
      };
    }

    if (code === 1 || code === 2) {
      return {
        description: "Partly Cloudy",
        icon: "🌤️"
      };
    }

    if (code === 3) {
      return {
        description: "Overcast",
        icon: "☁️"
      };
    }

    if (
      code === 45 ||
      code === 48
    ) {
      return {
        description: "Foggy",
        icon: "🌫️"
      };
    }

    if (
      code >= 51 &&
      code <= 57
    ) {
      return {
        description: "Drizzle",
        icon: "🌦️"
      };
    }

    if (
      code >= 61 &&
      code <= 67
    ) {
      return {
        description: "Rain",
        icon: "🌧️"
      };
    }

    if (
      code >= 71 &&
      code <= 77
    ) {
      return {
        description: "Snow",
        icon: "❄️"
      };
    }

    if (
      code >= 80 &&
      code <= 82
    ) {
      return {
        description: "Rain Showers",
        icon: "🌦️"
      };
    }

    if (
      code >= 95 &&
      code <= 99
    ) {
      return {
        description: "Thunderstorm",
        icon: "⛈️"
      };
    }

    return {
      description: "Unknown",
      icon: "🌤️"
    };
  };


  /*
   * Convert ISO time
   * Example:
   * 2026-09-13T05:30
   * becomes
   * 05:30 AM
   */

  const formatTime = (time) => {

    const date = new Date(time);

    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
  };


  let weatherInfo = null;

  if (weather) {
    weatherInfo = getWeatherInfo(
      weather.current.weather_code
    );
  }


  return (

    <div className="app">

      <div className="weather-container">

        {/* Header */}

        <div className="header">

          <h1>
            🌤️ Weather Dashboard
          </h1>

          <p>
            Check the current weather of any city
          </p>

        </div>


        {/* Search */}

        <div className="search-box">

          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {

              if (e.key === "Enter") {
                searchWeather();
              }

            }}
          />

          <button onClick={searchWeather}>
            Search
          </button>

        </div>


        {/* Error */}

        {error && (

          <div className="error">

            ❌ {error}

          </div>

        )}


        {/* Loading */}

        {loading && (

          <div className="loading">

            <div className="spinner"></div>

            <p>
              Getting weather information...
            </p>

          </div>

        )}


        {/* Weather */}

        {weather && !loading && location && (

          <div className="weather">

            {/* Location */}

            <div className="location">

              <h2>
                {location.name}
              </h2>

              <p>
                {location.admin1
                  ? `${location.admin1}, `
                  : ""}
                {location.country}
              </p>

            </div>


            {/* Main Weather */}

            <div className="main-weather">

              <div className="weather-icon">

                {weatherInfo.icon}

              </div>

              <div className="temperature">

                {Math.round(
                  weather.current.temperature_2m
                )}

                °C

              </div>

              <div className="description">

                {weatherInfo.description}

              </div>

            </div>


            {/* Weather Cards */}

            <div className="weather-info">


              {/* Humidity */}

              <div className="info-card">

                <div className="info-icon">
                  💧
                </div>

                <p>
                  Humidity
                </p>

                <strong>
                  {
                    weather.current
                      .relative_humidity_2m
                  }%
                </strong>

              </div>


              {/* Wind */}

              <div className="info-card">

                <div className="info-icon">
                  💨
                </div>

                <p>
                  Wind Speed
                </p>

                <strong>
                  {
                    weather.current
                      .wind_speed_10m
                  } km/h
                </strong>

              </div>


              {/* Sunrise */}

              <div className="info-card">

                <div className="info-icon">
                  🌅
                </div>

                <p>
                  Sunrise
                </p>

                <strong>
                  {formatTime(
                    weather.daily.sunrise[0]
                  )}
                </strong>

              </div>


              {/* Sunset */}

              <div className="info-card">

                <div className="info-icon">
                  🌇
                </div>

                <p>
                  Sunset
                </p>

                <strong>
                  {formatTime(
                    weather.daily.sunset[0]
                  )}
                </strong>

              </div>

            </div>

          </div>

        )}


        {/* Footer */}

        <div className="footer">

          Weather data provided by Open-Meteo

        </div>

      </div>

    </div>

  );
}

export default App;

