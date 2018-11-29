import React from 'react';
import { handleChange } from '../../lib/common';

class NewAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // Bind this in the event handlers:
    // Here (in the constructor `this` points to the component)
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // Stops the form refreshing the page:
    event.preventDefault();
    console.log('Submitted form!', this.state);
  }

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input onChange={this.handleChange}
            value={this.state.name || ''}
            name="name"
          />
          <label>Artist</label>
          <input onChange={this.handleChange}
            value={this.state.artist || ''}
            name="artist"
          />
          <button>Create album</button>
        </form>
      </section>
    );
  }
}

export default NewAlbum;
