import { FechApi } from './fech-data/FechApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import React, { useState } from 'react';
function App() {
  const [query, setQuery] = useState("");
  const [whater, setWhater] = useState({})

  const serch = async (e) => {
    if (e.key === 'Enter') {
      const data = await FechApi(query);
      console.log(data);
      setWhater(data.data);
    }

  }

  return (
    <div className="App w-100 d-flex ">
      <div className="container">
        <input
          type="text"
          className="serch px-3 py-3"
          placeholder='Serch ...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={serch}
        />
        {whater.main &&
          <div className="city mx-auto my-3 w-50">
            <div className="city-name">
              <h2><span>{whater.name}</span></h2>
            </div>
            <div className="city-temp">
              {(Math.round(whater.main.temp) - 273)}
              <sup>&deg;c</sup>
            </div>
            {/* <div className="city-info">
              <img className="city-icon" src={`https://api.openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="icon-temp" />
              <p>{weather.weather[0].description}</p>
            </div> */}
          </div>
        }
      </div>
      <div className="rith"></div>
      <div className="left"></div>


    </div>
  );
}

export default App;
