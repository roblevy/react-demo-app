/* global React,ReactDOM */
class App extends React.Component {
  constructor(props) {
    // Calls the React.Component constructor, passing in the props
    super(props);
    this.state = {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png',
      message: 'Welcome to React'
    };
  }

  // Every React component needs a render method
  render() {
    return React.createElement('div', { className: 'foo' },
      React.createElement('p', null, this.state.message),
      React.createElement('p', null, this.state.message.split('').reverse().join('')),
      React.createElement('img', { src: this.state.imageUrl }));
  }
}

// For the top-level component only
const app = React.createElement(App);
// Render the React app to <div id="root"></div>
ReactDOM.render(app, document.getElementById('root'));
