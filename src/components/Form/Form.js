import React, { useState } from "react";

const Form = ({ objectData }) => {
  // state del Componente
  // search = state, setSearch = this.setState({})
  const [search, setSearch] = useState({
    city: "",
    country: ""
  });

  const hadleChange = e => {
    // Cambiar el state
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  const checkWeather = e => {
    e.preventDefault();

    // props
    objectData(search);
  }

  return (
    <form
      onSubmit={ checkWeather }
    >
      <div className="input-field col s12">
        <input type="text" name="city" id="city" onChange={hadleChange} />
        <label htmlFor="city">Ciudad: </label>
      </div>
      <div className="input-field col s12">
        <select onChange={hadleChange} name="country">
          <option value="">Seleciona un pais</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="ES">España</option>
        </select>
      </div>
      <div className="input-field col s12">
        <input
          type="submit"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
          value="Buscar Clima"
        />
      </div>
    </form>
  );
};

export default Form;
