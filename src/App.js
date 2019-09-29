import React, { useState, useEffect } from "react";
import Nav from "./components/Header/Navbar";
import Form1 from "./components/Form/Form";
import Error from "./components/Form/Error";
import Clima from "./components/Clima/Clima"

import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(false);
  const [result, setResult] = useState({});

  useEffect(
    () => {
      // prevenir la ejecucion la primera ves, ya que esta vacio
      if (city === "") return;

      // Metodo para obtener la informacion del API
      const getDataFromApi = async () => {
        const apiID = "febe0708f693e17e423f0e9eb83941a2";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiID}`;
        let getApi = await fetch(url);
        let res = await getApi.json();

        // console.log(res);
        setResult(res);
      };

      getDataFromApi();
    },[city, country]
  );

  // se pasa este metodo como props al componente Form1
  const queryData = data => {
    // Valida que ambos campos estén agregados
    if (data.city === "" || data.country === "") {
      setError(true);
      return;
    }

    // Ciudad y pais existen, agregalos al state
    setCity(data.city);
    setCountry(data.country);
    setError(false);
  };

  

  // Cargar un componente condicionalmente
  let component;
  if (error) {
    // Existe error, mostrarlo
    component = <Error message="Ambos campos son obligatorios" />;
  } else if(result.cod === "404") {
    component = <Error message="La ciudad no existe en el registro" />
  } else {
    // Mostrar el clima
    component = <Clima data={result} />;
  }

  return (
    <div className="App">
      <Nav title="React Clima Hooks" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form1 objectData={queryData} />
            </div>
            <div className="col s12 m6">{component}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
