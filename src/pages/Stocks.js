import React from 'react';
import stocks from '../data';

const Stocks = (props) => {

console.log(props)

    const stockIndex = props.match.params.symbol;

    const thisStock = stocks[stockIndex];

    const {name, symbol, lastPrice, change, high, low, open} = thisStock;

    return (
        
        <h1>{name}</h1>
        
    )
}

export default Stocks;