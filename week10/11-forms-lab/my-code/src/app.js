import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import BurgerIndex from './components/burgers/Index';
import BurgerShow from './components/burgers/Show';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return(
      <div>
        <Header />
        <main className="container">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/burgers' component={BurgerIndex} />
            <Route path='/burgers/:id' component={BurgerShow}/>
          </Switch>
        </main>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
