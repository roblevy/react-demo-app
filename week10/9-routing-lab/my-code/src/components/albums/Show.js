import React from 'react';

class AlbumsShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
