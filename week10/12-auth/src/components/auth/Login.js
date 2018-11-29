import React from 'react';
import { handleChange } from '../../lib/common';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email</label>
        <input onChange={this.handleChange} name="email" />
        <label>Password</label>
        <input onChange={this.handleChange} name="password" />
        <button>Log in</button>
      </form>
    );
  }

}

export default Login;
