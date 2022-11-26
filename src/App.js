import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Components/Coin'

function App() {
  const [coins, setCoins] = useState([]);
 
  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => alert(error));
  }, []);

 

  const filteredCoins = coins

  return (
    <>
    <div className='App'>
      <h1>Crypto Data - II</h1>
    </div>
    <div className='coin-app'>
      
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
    <p style={{textAlign:'center'}}>&#169;	Priyanshu <span style={{color:'skyblue'}}>Verma</span></p>
    </>
  );
}

export default App;