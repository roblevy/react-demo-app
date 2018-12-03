import React from 'react';

function TextColumn({ burger }) {
  return (
    <div className="column is-6">
      <h1 className="title is-1">{burger.name}</h1>

      <h4 className="subtitle is-4">You can eat a {burger.name} at:</h4>
      <p>{burger.restaurant}</p>
      <p>{burger.address}</p>
      <p>£{burger.price}</p>

      {burger.suitableFor.length >= 1 &&
        <div>
          <h4 className="subtitle is-4">{burger.name} is suitable for:</h4>
          <ul>
            {burger.suitableFor.map((requirement, i) =>
              <li key={i}>{requirement}</li>
            )}
          </ul>
        </div>
      }
    </div>
  );
}

export default TextColumn;
