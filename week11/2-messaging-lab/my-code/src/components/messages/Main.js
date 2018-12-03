import React from 'react';
import axios from 'axios';
import { authorizationHeader } from '../../lib/auth';
import { handleChange } from '../../lib/common';
import Sidebar from './Sidebar';
import Conversation from './Conversation';
import Compose from './Compose';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.chooseConversation = this.chooseConversation.bind(this);
  }

  chooseConversation(user) {
    this.setState({ user: user });
  }

  componentDidMount() {
    axios.get('/api/messages', authorizationHeader())
      .then(result => this.setState({ messages: result.data }));
  }

  render() {
    return(
      <main>
        <h1 className="title is-2">Messages</h1>
        <div className="message-container">
          <div className="sidebar">
            <Sidebar messages={this.state.messages} handleClick={this.chooseConversation}/>
          </div>
          <div className="messages-main">
            <div className="conversation">
              <Conversation user={this.state.user}/>
            </div>
            <div className="compose">
              <Compose />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Messages;
