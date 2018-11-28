import React from 'react';

class NewAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // Bind this in the event handlers:
    // Here (in the constructor `this` points to the component)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // Stops the form refreshing the page:
    event.preventDefault();
    console.log('Submitted form!', this.state);
  }

  handleChange({ target: { name, value }}) {
    console.log('event.target.name is', event.target.name, this.state);
    // ES6 destructuring:
    // handleChange(event) {
    // const name = event.target.name;
    // const value = event.target.value;
    // const [name, value] = event.target;
    // Superadvanced ES6 destructuring:
    // const { target: {name, value}} = event;
    // Update state using the latest value in the input
    this.setState({ [name]: value });
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
