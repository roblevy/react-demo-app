import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/auth/Login';
import AlbumsIndex from './components/albums/Index';
import AlbumsShow from './components/albums/Show';
import AlbumsNew from './components/albums/New';
import './scss/main.scss';
import 'bulma';
import { login } from './lib/auth';

function Home() {
  return (
    <section>
      <h1>Home!</h1>
      <Link to="login">Login</Link>
    </section>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.login = login.bind(this);
  }

  render() {
    return (
      <main>
        <Header />
        <p>{this.state.message}</p>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/albums" component={AlbumsIndex} />
          <Route exact path="/albums/new" component={AlbumsNew} />
          <Route path="/albums/:id" component={AlbumsShow} />
        </Switch>
      </main>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));
