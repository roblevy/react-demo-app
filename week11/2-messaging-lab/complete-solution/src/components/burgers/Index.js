import React from 'react';
import axios from 'axios';
import BurgerBox from './BurgerBox';

class BurgerIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/api/burgers')
      .then(result => this.setState({ burgers: result.data }));
  }

  render() {
    return (
      <section className="section">
        <h1 className="title">All the burgers</h1>
        <hr />
        <div className="box-container">
          {this.state.burgers && this.state.burgers.map(
            burger => <BurgerBox key={burger._id} burger={burger}/>
          )}
        </div>
      </section>
    );
  }
}
export default BurgerIndex;
