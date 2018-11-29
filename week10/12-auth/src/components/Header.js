import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/albums">Index</Link>
      <Link to="/albums/new">Create an album</Link>
    </nav>
  );
}

export default Header;
