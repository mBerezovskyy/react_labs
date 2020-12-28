import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <Link to="/" className="brand-logo">
          My axe shop
        </Link>

        <ul className="right">
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/cart">My cart</Link>
          </li>
          <li />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
