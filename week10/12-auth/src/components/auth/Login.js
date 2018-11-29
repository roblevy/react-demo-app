import React from 'react';
import axios from 'axios';
// This is like:
// import auth from '....';
// saveToken = auth.saveToken;
import { saveToken } from '../../lib/auth';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Login!', this.state);
    axios.post('https://jammin-api.herokuapp.com/api/login', this.state)
      .then(result => {
        saveToken(result.data.token);
        this.props.history.push('/albums');
      });
  }

  handleChange({ target: { name, value }}) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email</label>
        <input name="email" onChange={this.handleChange} value={this.state.email || ''}/>
        <label>Password</label>
        <input name="password" onChange={this.handleChange} value={this.state.password || ''}/>
        <button>Log in</button>
      </form>
    );
  }
}

export default Login;
