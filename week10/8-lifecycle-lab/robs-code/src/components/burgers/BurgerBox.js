import React from 'react';

function BurgerBox({ burger }) {
  return (
    <article className="burger-box">
      <img src={burger.image} />
      <hr />
      <h3>{burger.name}</h3>
    </article>
  );
}

export default BurgerBox;
