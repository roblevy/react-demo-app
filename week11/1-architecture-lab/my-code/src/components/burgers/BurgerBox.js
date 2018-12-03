import React from 'react';
import { Link } from 'react-router-dom';

function BurgerBox({ burger }) {
  return (
    <Link to={`/burgers/${burger._id}`}>
      <article className="burger-box">
        <img src={burger.image} />
        <hr />
        <h3>{burger.name}</h3>
      </article>
    </Link>
  );
}

export default BurgerBox;
