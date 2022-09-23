import React from 'react';
import stocks from '../data';

const Stocks = (props) => {

console.log(props)

    const stockIndex = props.match.params.symbol;

    const thisStock = stocks[stockIndex];

    const {name, symbol, lastPrice, change, high, low, open} = thisStock;

    return (
        <div>
            <h1>{name}</h1>
            <h2>{symbol}</h2>
            <h3>Last Price: {lastPrice}</h3>
            <h3>Change: {change}</h3>
            <h4>High: {high}</h4>
            <h4>Low: {low}</h4>
            <h4>Open: {open}</h4>
        </div>
        
    )
}

export default Stocks;