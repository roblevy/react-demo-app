import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, deleteToken } from '../lib/auth';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    deleteToken();
    this.props.history.push('/');
  }

  render() {
    return (
      <nav className="navbar">
        <Link className="navbar-item" to="/">Home</Link>
        <Link className="navbar-item" to="/albums">Index</Link>
        {isAuthenticated() && <Link className="navbar-item" to="/albums/new">Create an album</Link>}
        {!isAuthenticated() && <Link className="navbar-item" to="/login">Login</Link>}
        {isAuthenticated() && <a className="navbar-item" onClick={this.handleLogout}>Logout</a>}
      </nav>
    );
  }
}

export default withRouter(Header);
