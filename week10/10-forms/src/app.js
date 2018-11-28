import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import AlbumsIndex from './components/albums/Index';
import AlbumsShow from './components/albums/Show';
import AlbumsNew from './components/albums/New';
import './scss/main.scss';
import 'bulma';

function Home() {
  return (
    <h1>Home!</h1>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
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
