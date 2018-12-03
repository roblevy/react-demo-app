import React from 'react';
import axios from 'axios';

import BurgerMap from '../common/Map';

class BurgerIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      burgers: null,
      userPosition: null
    };
    this.getLocation = this.getLocation.bind(this);
    this.getBurgers = this.getBurgers.bind(this);
  }

  getLocation(pos) {
    this.setState({ userPosition: [pos.coords.latitude, pos.coords.longitude]}, () => {
      this.getBurgers();
    });
  }

  getBurgers() {
    axios.get('/api/burgers')
      .then(res => this.setState({ burgers: res.data }));
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.getLocation, this.getBurgers);
  }

  render() {
    return (
      <section className="section">
        <h1 className="title">All the burgers</h1>
        <hr />
        <div className="box-container">
          {!this.state.userPosition && !this.state.burgers
            ?
            <p>Loading map...</p>
            :
            <BurgerMap
              userPosition={this.state.userPosition}
              burgers={this.state.burgers} />
          }
        </div>
      </section>
    );
  }
}
export default BurgerIndex;
