import React, { useState } from 'react';
import Menu from '../menu/Menu';
import Chat from '../chat/Chat';
import Users from '../users/Users';

function Content() {
  const [selectedChanel, setSelectedChanel] = useState(false);

  return (
    <div className="content">
      <Menu selectChanel={setSelectedChanel} />
      {selectedChanel && <Users />}
      <Chat />
    </div>
  );
}

export default Content;
