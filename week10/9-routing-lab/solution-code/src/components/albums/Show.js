import React from 'react';
import axios from 'axios';

class AlbumsShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // This is part of the component Lifecycle
  // It must be named exactly like this:
  componentDidMount() {
    axios.get(`https://jammin-api.herokuapp.com/api/albums/${this.props.match.params.id}`)
      .then(result => this.setState({ album: result.data }));
  }

  render() {
    const album = this.state.album;
    return (
      <main>
        {album
          ?
          <section>
            <h1>{album.name}</h1>
            <img src={album.coverPic} />
            {album.tracks &&
              <ol>
                {album.tracks.map((track, i) =>
                  <li key={i}>{track}</li>
                )}
              </ol>
            }
          </section>
          :
          <p>📀📀📀 Waiting for album 📀📀📀</p>
        }
      </main>
    );
  }
}

export default AlbumsShow;
