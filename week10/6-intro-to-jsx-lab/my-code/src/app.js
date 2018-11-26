/* global React, ReactDOM */
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageUrl: 'https://www.rollingstone.com/wp-content/uploads/2018/07/stevie-wonder-album-guide.jpg',
      artist: 'Stevie Wonder',
      title: 'Songs in the key of life',
      tracks: ['Love\'s in Need of Love Today', 'Have a Talk with God', 'Village Ghetto Land',
        'Contusion', 'Sir Duke', 'I Wish', 'Knocks Me Off My Feet', 'Pastime Paradise',
        'Summer Soft', 'Ordinary Pain', 'Isn\'t She Lovely', 'Joy Inside My Tears', 'Black Man',
        'Ngiculela – Es Una Historia – I Am Singing', 'If It\'s Magic', 'As', 'Another Star']
    };
  }
  render(){
    // Transform this into JSX and use the transpiler:
    // yarn add babel-cli@6 babel-preset-react-app@3
    // then:
    // npx babel --watch src --out-dir . --presets react-app/prod
    return React.createElement('section', {className: 'container'},
      React.createElement('h1', {className: 'title'}, 'Show'),
      React.createElement('img', {src: this.state.imageUrl}),
      React.createElement('p', null, this.state.title),
      React.createElement('p', null, this.state.artist),
      React.createElement('ol', null,
        this.state.tracks.map(track => React.createElement('li', null, track)))
    );
  }
}


const app = React.createElement(App);
ReactDOM.render(app, document.getElementById('root'));
