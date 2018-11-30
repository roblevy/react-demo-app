import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import BurgerIndex from './components/burgers/Index';
import BurgerShow from './components/burgers/Show';
import BurgerNew from './components/burgers/New';
import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';
import Basket from './components/Basket';
import PurchaseHistory from './components/PurchaseHistory';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return(
      <BrowserRouter>
        <div>
          <Header />
          <main className="container">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/basket' component={Basket}/>
              <Route exact path='/purchases' component={PurchaseHistory}/>
              <Route exact path='/burgers' component={BurgerIndex} />
              <Route exact path='/burgers/new' component={BurgerNew} />
              <Route path='/burgers/:id' component={BurgerShow}/>
              <Route path="/login" component={AuthLogin} />
              <Route path="/register" component={AuthRegister} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
