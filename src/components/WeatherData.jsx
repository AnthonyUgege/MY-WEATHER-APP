const WeatherData = ({ weather }) => {
  return (
    <div>
      <h1 id="w-location">{weather.location.name}</h1>
      <h3 className="text-dark" id="w-desc">
        {weather.current.condition.text}
      </h3>
      <h3 id="w-string">{Math.round(weather.current.temp_c)} °C</h3>
      <img
        id="w-icon"
        src={weather.current.condition.icon}
        alt={weather.current.condition.text}
      />
      <ul id="w-details" className="list-group mt-3">
        <li className="list-group-item" id="w-humidity">
          Humidity: {weather.current.humidity} %
        </li>
        <li className="list-group-item" id="w-dewpoint">
          Precipitation: {weather.current.precip_mm} mm
        </li>
        <li className="list-group-item" id="w-feels-like">
          Feels Like: {Math.round(weather.current.feelslike_c)} °C
        </li>
        <li className="list-group-item" id="w-wind">
          Wind: {Math.round(weather.current.wind_kph)} kmph
        </li>
      </ul>
    </div>
  );
};

export default WeatherData;
