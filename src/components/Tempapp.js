import React, { useEffect, useState } from "react";
// import SearchIcon from "@material-ui/icons/Search";
import "./css/style.css";
const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [hello, setHello] = useState(null);
  const [search, setSearch] = useState("Tanuku");
  //   const url = url("https://source.unsplash.com/1600x900/?landscape");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4c797f9de54b7c2e1951b1cda33cb24e`;
      const response = await fetch(url);

      const resJson = await response.json();
      setCity(resJson.main);

      // console.log(resJson.main);

      console.log(resJson.wind);
      setHello(resJson.wind);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputFeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!(city && hello) ? (
          <p className="errorMsg">No data found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°Cel</h1>
              <h3 className="tempmin_max">
                {" "}
                Min : {city.temp_min}°cel <br></br>Max : {city.temp_max}°cel{" "}
                <br></br>
                humidity: {city.humidity}% <br></br>speed:{hello.speed}Km/Hr
              </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
