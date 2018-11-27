import React from 'react';
import ReactDOM from 'react-dom';
import AlbumsIndex from './components/AlbumsIndex';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        'India', 'Doris', 'Rafa'
      ]
    };
  }

  render() {
    return (
      <main>
        <AlbumsIndex />
      </main>
    );
  }
}


// Render a component (App) to
// a dom element (id="root")
ReactDOM.render(<App />, document.getElementById('root'));
