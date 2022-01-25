import React from "react";

const api ={
  key:"61f524a044d6fb15f33a866024dda10b",
  base:"https://api.openweathermap.org/data/2.5/"
}
function App() {
  const dateBuilder=(d)=>{
    let months =["January","February","March","April","Maay","June","July","August","September","October","November","December"];
    let days =["Sunday","Monday","Tuesday","Wendesday","Thursday","Friday","Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} , ${date} ${month} ${year}`
  }
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text"
            className='search-bar'
            placeholder='Search..'
          />
        </div>
        <div className="location-box">
          <div className="location">
            New York City, Us
          </div>
          <div className="date">
            {dateBuilder(new Date())}
          </div>
        </div>
        <div className="weather-box">
          <div className="temp">
             15°c
          </div>
          <div className="weather">
            Sunny
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
