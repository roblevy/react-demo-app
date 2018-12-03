import React from 'react';

function Sidebar() {
  const users = [
    { _id: 1234, username: 'Rob', messageCount: 3 },
    { _id: 1235, username: 'Matt', messageCount: 1 },
    { _id: 1236, username: 'Ellie', messageCount: 5 }
  ];
  return (
    <div>
      {users.map(user =>
        <div key={user._id}>
          <p>{user.username} - ({user.messageCount})</p>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
