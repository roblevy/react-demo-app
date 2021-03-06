import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, deleteToken, decodeToken } from '../lib/auth';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    deleteToken();
    this.props.history.push('/');
  }

  componentDidUpdate(previousProps) {
    if (previousProps.location.pathname !== this.props.location.pathname) {
      // The URL has changed! Update state.
      console.log('Header received new props', previousProps, this.props);
      this.setState({ url: this.props.location.pathname });
    } else {
      console.log('Header updated but we did not set state');
    }
  }

  componentDidMount() {
    console.log('Header was mounted');
  }

  render() {
    return (
      <nav className="navbar is-warning">
        {this.state.url && <p>{this.state.url}</p>}
        <div className="navbar-brand">
          <h2 className="title is-2">33ounce</h2>
          {isAuthenticated() && <p>Welcome back! {decodeToken().username}</p>}
        </div>
        <div className="navbar-end">
          <Link className="navbar-item" to="/">Home</Link>
          <Link className="navbar-item" to="/burgers">All the Burgers</Link>
          <Link className="navbar-item" to='/burgers/new'>Add a Burger</Link>
          {isAuthenticated() && <Link className="navbar-item" to="/purchases">Purchase history</Link>}
          {isAuthenticated() && <Link className="navbar-item" to="/basket">Basket</Link>}
          {isAuthenticated() && <Link className="navbar-item" to="/messages">Messages</Link>}
          {isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item">Log Out</a>}
          {!isAuthenticated() && <Link className="navbar-item" to="/login">Log In</Link>}
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
