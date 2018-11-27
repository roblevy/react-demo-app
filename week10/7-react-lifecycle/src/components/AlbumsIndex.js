import React from 'react';
import axios from 'axios';
import Box from './Box';

class AlbumsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('Constructed');
  }

  // This is part of the component Lifecycle
  // It must be named exactly like this:
  componentDidMount() {
    console.log('Mounted');
    axios.get('https://jammin-api.herokuapp.com/api/albums')
      .then(result => this.setState({ albums: result.data }));
  }

  render() {
    console.log('Rendering...', this.state.albums);
    return (
      <main>
        <h1>Albums index</h1>
        {this.state.albums
          ?
          this.state.albums.map(album => <Box key={album._id} album={album}/>)
          :
          <p>Loading...</p>
        }
      </main>
    );
  }
}

export default AlbumsIndex;
