import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, deleteToken, decodeToken } from '../lib/auth';

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
      <nav className="navbar is-warning">
        <div className="navbar-brand">
          <h2 className="title is-2">33ounce</h2>
          {isAuthenticated() && <p>Welcome back! {decodeToken().username}</p>}
        </div>
        <div className="navbar-end">
          <Link className="navbar-item" to={'/'}>Home</Link>
          <Link className="navbar-item" to={'/burgers'}>All the Burgers</Link>
          <Link className="navbar-item" to='/burgers/new'>Add a Burger</Link>
          {isAuthenticated()
            ?
            <a onClick={this.handleLogout} className="navbar-item" to='/logout'>Log Out</a>
            :
            <Link className="navbar-item" to='/login'>Log In</Link>}
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
