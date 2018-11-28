import React from 'react';

function ImageColumn({ burger }) {
  return (
    <div className="column is-6">
      <img src={burger.image} alt={burger.name}/>
    </div>
  )
}

export default ImageColumn;
