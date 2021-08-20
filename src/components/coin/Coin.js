import React from 'react';
import './Coin.css';

const Coin = ({ name, image, symbol, price, priceChange, volume, marketcap }) => {

    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto"  />
                    <h2>{name}</h2>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price"> <span>PKR</span> {price.toLocaleString()}</p>
                    {
                        priceChange < 0 ? (
                          <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                          ) : (
                          <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                          )
                    }
                    <p className="coin-volume"><span>Volume:</span> <br /> <span>PKR</span> {volume.toLocaleString()}</p>
                    <p className="coin-marketcap">
                        <span>Mkt Cap:</span> <br /> <span>PKR</span> {marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin;
