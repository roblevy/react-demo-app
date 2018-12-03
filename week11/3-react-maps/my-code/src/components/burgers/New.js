import React from 'react';
import BurgerForm from './BurgerForm';
import axios from 'axios';
import { getToken } from '../../lib/Auth';

class BurgersNew extends React.Component {
  state = {
    errors: {}
  };

  handleChange = ({ target: { name, value } }) => {
    const errors = { ...this.state.errors, [name]: '' };
    if(name === 'location') {
      value = {
        lat: parseFloat(value.split(',')[0]),
        lng: parseFloat(value.split(',')[1])
      };
    }
    this.setState({ errors, [name]: value }, ()=> console.log(this.state));
  }

  handleSubmit = e => {
    e.preventDefault();
    axios.post('/api/burgers', this.state, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
      .then(() => this.props.history.push('/burgers'))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    return <BurgerForm
      burger={this.state}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      errors={this.state.errors}
    />;
  }
}

export default BurgersNew;
