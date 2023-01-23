import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      
    </div>
  );
}

function Countries(){
  const[countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])

  return(
    <div>
      <h2>This is project-1 and it is about showing some countries information</h2>
      <h3>Simple React Project with 5 core concepts: JSX, Components, Props, State(useState), Load Data(useEffect) another core concept is event handler not covered in this project; it's a todo</h3>
      <p>
        I used useState and useEffect to fetch data from restcountries API and showed it using jsx, components, props, State and fetching data from API.
      </p>
      <h4>Total Countries: {countries.length}</h4>
      <div className="countries">
        
      {
        countries.map((country)=>(
          //<li>{country.name.common}</li>
          //<Country name={country.name.common}></Country>
          <Country country={country}></Country>
        ))
      }
      </div>
    </div>
  )
}

function Country(props){
  console.log(props)
  return(
    <div className='country'>
      <img src={props.country.flags.png} alt={'flag-pic'}></img>
      <h2>Country Name: {props.country.name.common}</h2>
      <h3>Area: {props.country.area}</h3>
      <h3>Capital: {props.country.capital}</h3>
    </div>
  )
}

export default App;
