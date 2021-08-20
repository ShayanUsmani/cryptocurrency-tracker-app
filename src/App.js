import React, { useState, useEffect } from 'react';
import Coin from './components/coin/Coin';
import axios from 'axios';
import './App.css';


function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=pkr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
      }).catch(error => console.log(error));
  }, []);

  const handleChange = e =>{
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    )
    

  return (
    <div className="coin-app">
      <div className="coin-search">
        <div className="coin-text">
      <i class="fab fa-bitcoin"></i>
        <h1> Cryptocurrency Tracker App</h1>
        </div>
        <form>
          <input className="coin-input" 
          type="text" placeholder="Search your currency..."
          onChange={handleChange} />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return(
          <Coin 
          key={coin.id}
          image={coin.image}
          name={coin.name} 
          symbol={coin.symbol}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          marketcap={coin.market_cap}
          volume={coin.total_volume} />
        )
      })}
    </div>
  );
}

export default App;
