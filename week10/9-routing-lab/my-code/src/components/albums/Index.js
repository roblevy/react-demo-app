import React from 'react';
import axios from 'axios';
import AlbumBox from './AlbumBox';

class AlbumsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('https://jammin-api.herokuapp.com/api/albums')
      .then(result => this.setState({ albums: result.data }));
  }

  render() {
    return (
      <main>
        <h1>All our albums</h1>
        <div className="index-container">
          {this.state.albums
            ?
            this.state.albums.map(album => <AlbumBox key={album._id} album={album}/>)
            :
            <p>Loading...</p>
          }          
        </div>
      </main>
    );
  }
}

export default AlbumsIndex;
