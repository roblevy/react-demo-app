import React from 'react';

function Conversation({ user }) {
  return (
    <div>
      {user && <h1 className="title">{user._id}</h1>}
    </div>
  );
}

export default Conversation;
