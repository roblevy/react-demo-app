import React from 'react';
import axios from 'axios';

import ImageColumn from './ImageColumn';
import TextColumn from './TextColumn';

import { handleChange } from '../../lib/common';
import { addItem } from '../../lib/basket';

export default class BurgerShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/burgers/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ burger: res.data });
        console.log('We have', this.state.burger);
      });
  }

  handleClick() {
    console.log(this.state);
    addItem(this.state.burger, parseInt(this.state.quantity));
    this.props.history.push('/basket');
  }

  render() {
    const burger = this.state.burger;
    return (
      <section>
        {burger
          ?
          <div>
            <div className="columns">
              <ImageColumn burger={burger} />
              <TextColumn burger={burger}/>
            </div>
            <hr />
            <div className="columns">
              <div className="field column is-8">
                <label htmlFor="quantity" className="label">Quantity</label>
                <input className="input" type="number" name="quantity"
                  value={this.state.quantity || 0} onChange={this.handleChange}/>
              </div>
              <div className="column is-4">
                <button className="button" onClick={this.handleClick}>Add to basket</button>
              </div>
            </div>
          </div>
          :
          <p>Please wait...</p>}
      </section>
    );
  }
}
