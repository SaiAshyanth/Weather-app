// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';

const API_key = 'cb28a2235e98849c9d1148d1ba9c75aa';

const App = () => {
  const [cityName, setCityName] = useState('');
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`);
      setData(response.data);
    } catch (err) {
      alert('Enter the city name');
    }
  };

  return (
    <div className='App'>
      <h1 className='Title'>Weather App</h1>
      <div className='container'>
        <h3>Enter the City Name:</h3> {/* Move the label above the input field */}
        <div className='input-container'>
          <input
            type="text"
            className='input'
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            placeholder="city name"
          />
          <button className='button' onClick={fetchData}>
            Fetch
          </button>
        </div>
        <div>
          {data && (
            <div>
              <h2>{data.name}</h2>
              <p>Temperature: {Math.round(data.main.temp - 273.15)}°C</p>
              <p>Weather: {data.weather[0].main}</p>
              {/* Add more details as needed */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;


// import React, { useState } from 'react';
// import Axios from 'axios';
// import './App.css';

// const API_key = 'cb28a2235e98849c9d1148d1ba9c75aa';

// const App = () => {
//   const [cityName, setCityName] = useState('');
//   const [data, setData] = useState();

//   const fetchData = async () => {
//     try {
//       const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`);
//       setData(response.data);
//     } catch (err) {
//       alert('Enter the city name');
//     }
//   };

//   const getWeatherClassName = () => {
//     if (!data) return 'default';
//     const weather = data.weather[0].main.toLowerCase();
//     if (weather.includes('sun')) return 'sunny';
//     if (weather.includes('cloud')) return 'cloudy';
//     if (weather.includes('rain')) return 'rainy';
//     if (weather.includes('snow')) return 'snowy';
//     return 'default';
//   };

//   return (
//     <div className={`App ${getWeatherClassName()}`}>
//       <h1 className='Title'>Weather App</h1>
//       <div className='input-container'>
//         <input
//           type="text"
//           className='input'
//           value={cityName}
//           onChange={(e) => setCityName(e.target.value)}
//           placeholder="Enter the City Name"
//         />
//         <button className='button' onClick={fetchData}>
//           Fetch
//         </button>
//       </div>
//       <div>
//         {data && (
//           <div className={`container ${getWeatherClassName()}`}>
//             <h2>{data.name}</h2>
//             <p>Temperature: {Math.round(data.main.temp - 273.15)}°C</p>
//             <p>Weather: {data.weather[0].main}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;
