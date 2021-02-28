import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/country/Country';
import Cart from './components/country/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart,setCart] = useState([]);
  useEffect(() =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  const addedCountry =(country)=> {
    const newCart = [...cart,country];
    setCart(newCart)
  }
  return (
    <div className="App">
      <h3>country added: {cart.length}</h3>
      <Cart cart={cart}></Cart>
      <ul>
        {
          countries.map(country=> <Country country={country} addedCountry={addedCountry}></Country> )
        }
      </ul>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
