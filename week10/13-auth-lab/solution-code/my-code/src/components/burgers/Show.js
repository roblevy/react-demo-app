import React from 'react';
import axios from 'axios';

import ImageColumn from './ImageColumn';
import TextColumn from './TextColumn';


export default class BurgerShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get(`/api/burgers/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ burger: res.data });
        console.log('We have', this.state.burger);
      });
  }

  render() {
    const burger = this.state.burger;
    return (
      <section>
        {burger
        ?
        <div className="columns">
          <ImageColumn burger={burger} />
          <TextColumn burger={burger}/>
        </div>

        :

        <p>Please wait...</p>}

      </section>
    )
  }
}
