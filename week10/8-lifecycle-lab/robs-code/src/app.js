import React from 'react';
import ReactDOM from 'react-dom';
import BurgerIndex from './components/burgers/Index';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return(
      <main className="container">
        <BurgerIndex />
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
