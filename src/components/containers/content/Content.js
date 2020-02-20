import React from 'react';
import Menu from '../menu/Menu';
import Chat from '../chat/Chat';
import Users from '../users/Users';

function Content() {
  return (
    <div className="content">
      <Menu />
      <Users />
      <Chat />
    </div>
  );
}

export default Content;
