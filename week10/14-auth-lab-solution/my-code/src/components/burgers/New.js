import React from 'react';
import axios from 'axios';

import BurgerForm from './BurgerForm';

export default class BurgerNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log('Change handled', e.target.name, this.state);
    const { target: {name, value} } = e;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Submit handled', this.state);
    axios.post('/api/burgers', this.state)
      .then(() => this.props.history.push('/burgers'));
  }

  render() {
    return(
      <section>
        <h2 className="title is-2">Add a Burger</h2>
        <BurgerForm
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        />
      </section>
    )
  }
}
