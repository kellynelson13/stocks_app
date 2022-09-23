import React from 'react';
import stocks from '../data.js';
import {Link} from 'react-router-dom';

const Dashboard = () => {

const stockList = stocks.map((stock, index) => {
    const {name, symbol} = stock;
    return (
        <Link to={`/stocks/${index}`}>
            <h5 key="{index}">{name }{ symbol}</h5>
        </Link>
    )
})

    return (
        <div>
            {stockList}
        </div>
    )
}

export default Dashboard;