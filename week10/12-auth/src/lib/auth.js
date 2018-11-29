import axios from 'axios';

export function login(event, data) {
  console.log('evenet!', event);
  event.preventDefault();
  axios.post('https://jammin-api.herokuapp.com/api/login', data)
    .then(result => {
      console.log('Logged in', result.data);
      this.setState({ message: result.data.message, token: result.data.token });
    })
}
