import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div class="nav">
            <Link to="/stocks">
                <div>HOME</div>
            </Link> 
            <Link to="/about">
                <div>ABOUT</div>
            </Link>
        </div>
    )
}

export default Nav;