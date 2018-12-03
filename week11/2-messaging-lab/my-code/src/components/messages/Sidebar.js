import React from 'react';
import { messagesPerUser } from '../../lib/messages';

function Sidebar({ messages }) {
  const messageCounts = messages && messagesPerUser(messages);
  return (
    <div>
      {messages && Object.keys(messageCounts).map(userId =>
        <div key={userId}>
          <p>{messageCounts[userId].user.username} - ({messageCounts[userId].count})</p>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
