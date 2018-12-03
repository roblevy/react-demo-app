import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { isAuthenticated, getToken, decodeToken } from '../../lib/auth';
import CommentForm from './CommentForm';
import BurgerMap from '../common/Map';

class BurgersShow extends React.Component {
  state = {
    comment: {}
  }

  componentDidMount() {
    console.log(decodeToken());
    axios.get(`/api/burgers/${this.props.match.params.id}`)
      .then(res => this.setState({ burger: res.data }));
  }

  handleDelete = () => {
    axios.delete(`/api/burgers/${this.props.match.params.id}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
      .then(() => this.props.history.push('/burgers'));
  }

  handleCommentChange = ({ target: { name, value } }) => {
    const comment = { ...this.state.comment, [name]: value };
    this.setState({ comment });
  }

  handleCommentSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    axios.post(`/api/burgers/${id}/comments`, this.state.comment, {
      headers: { Authorization: `Bearer ${getToken()}`}
    })
      .then(res => this.setState({ burger: res.data, comment: {} }));
  }

  handleCommentDelete = comment => {
    const { id } = this.props.match.params;
    axios
      .delete(`/api/burgers/${id}/comments/${comment._id}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
      .then(res => this.setState({ burger: res.data }));
  }

  render() {
    const { burger } = this.state;
    if(!burger) return null;
    return (
      <div className="columns is-multiline">
        <div className="column is-half">
          <div className="hero-image" style={{ backgroundImage: `url(${burger.image})` }} />
        </div>
        <div className="column is-half">
          <h1 className="title is-1">{burger.name}</h1>
          <h2 className="subtitle is-2">{burger.restaurant}</h2>
          <p>{burger.description}</p>
          <p className="price">{'💰'.repeat(burger.price)}</p>
          <hr />
          <Link
            to={`/burgers/${burger._id}/edit`}
            className="button"
          >Edit</Link>
          <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
        </div>
        <div className='column is-half'>
          <BurgerMap burgers={[ burger ]} userPosition={null} />
        </div>
        <div className='column is-half'>
          <ul>
            {burger.comments.map(comment =>
              <li key={comment._id}>
                <p className="title is-4">{comment.text}</p>
                <p className="subtitle is-5">{comment.user.username}</p>
                <p>{'🍔'.repeat(comment.rating)}</p>
                {decodeToken().sub === comment.user._id && <button
                  className="button is-danger"
                  onClick={() => this.handleCommentDelete(comment)}
                >Delete</button>}
                <hr />
              </li>
            )}
          </ul>
          {isAuthenticated() && <CommentForm
            handleChange={this.handleCommentChange}
            handleSubmit={this.handleCommentSubmit}
            comment={this.state.comment}
          />}
        </div>
      </div>
    );
  }
}

export default BurgersShow;
