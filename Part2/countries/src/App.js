import React, { useState, useEffect } from 'react';
import Weather from './components/Weather'
import axios from 'axios'
// const api_key = process.env.REACT_APP_API_KEY


function App() {
  const [countries, setCountries] = useState([])
  const [filtered, setFiltered] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleChange = (event) => {
    setFiltered(event.target.value)
  }
  
  const display = countries.filter(c => c.name.toString().toLowerCase().includes(filtered.toString().toLowerCase()) === true)

  const handleClick = name => {
    setFiltered(name)
  }

  let text;
  if(filtered === "") {
    text = <p>Search for country</p>
  } else if (display.length > 10) {
    text = <p>Too many matches</p>
  } else if (display.length > 1) {
    text = display.map(d => <p key={d.alpha3Code}>{d.name}<button onClick={() => handleClick(d.name)}>show</button></p>)
    
  } else {
    text = display.map(d => 
      <div key={d.alpha3Code}>
        <h2>{d.name}</h2>
        <p>capital {d.capital}</p>
        <p>population {d.population}</p>
        <h2>languages</h2>
        <ul>
          {d.languages.map(l => <li key={l.name}>{l.name}</li>)}
        </ul>
        <img src={d.flag} height='200px' width='400px' alt='img'/>
        <Weather country={d} />
      </div>)
  }

  return (
    <div>
      find countries <input type="text" value={filtered} onChange={handleChange}/>
      {text}
    </div>
  );
}

export default App;