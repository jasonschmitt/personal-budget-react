import React from 'react';
import './Menu.scss';

import {
  Link
} from "react-router-dom";
function Menu() {
  return (
    <nav className="menu">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="/about">About</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
    </nav>
  );
}

export default Menu;
