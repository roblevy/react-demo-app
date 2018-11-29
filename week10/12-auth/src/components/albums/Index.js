import React from 'react';
import axios from 'axios';
import AlbumBox from './AlbumBox';
import { decodeToken } from '../../lib/auth';

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
    const username = decodeToken().username;
    return (
      <main>
        {username && <p>Welcome back {username}</p>}
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
