import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar is-warning">
      <div className="navbar-brand">
        <h2 className="title is-2">33ounce</h2>
      </div>
      <div className="navbar-end">
        <Link className="navbar-item" to={'/'}>Home</Link>
        <Link className="navbar-item" to={'/burgers'}>All the Burgers</Link>
      </div>
    </nav>
  )
}

export default Header;
