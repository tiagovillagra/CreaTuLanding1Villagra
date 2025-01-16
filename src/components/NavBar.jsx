import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">Mi Tienda</a>
    <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link" href="/">Inicio</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/productos">Productos</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/contacto">Contacto</a>
        </li>
        </ul>
    </div>
    <CartWidget />
    </nav>
);
};

export default NavBar;
