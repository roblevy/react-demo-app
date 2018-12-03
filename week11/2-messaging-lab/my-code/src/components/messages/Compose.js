import React from 'react';

function Compose() {
  return (
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64">
          <img src="https://cdn1.iconfinder.com/data/icons/business-charts/512/customer-512.png"/>
        </p>
      </figure>
      <div className="media-content">
        <div className="field">
          <p className="control">
            <textarea className="textarea" />
          </p>
        </div>
        <nav className="level">
          <div className="level-left">
            <div className="level-item">
              <a className="button is-info">Submit</a>
            </div>
          </div>
        </nav>
      </div>
    </article>
  );
}

export default Compose;
