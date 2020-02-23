import React, { useState } from 'react';
import Menu from '../menu/Menu';
import Chat from '../chat/Chat';
import Users from '../users/Users';

const users = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'John' },
  { id: 3, name: 'Vasya' },
  { id: 4, name: 'Andrey' },
  { id: 5, name: 'Aleona' },
  { id: 6, name: 'Timofey' },
  { id: 7, name: 'Sasha' },
  { id: 8, name: 'Kuzya' },
  { id: 9, name: 'Leman' },
  { id: 10, name: 'qwerty' },
  { id: 11, name: 'Sima' },
  { id: 12, name: 'Veronika' },
  { id: 13, name: 'Anton' }];

const defChanel = [
  { chanelId: '1', name: 'csruhub', activeUsers: [users[0], users[1], users[2], users[6]] },
  { chanelId: '2', name: 'hydramist', activeUsers: [users[3], users[4], users[5]] },
  { chanelId: '3', name: 'rubendahouse', activeUsers: [users[7], users[8], users[9], users[10], users[11]] },
  { chanelId: '4', name: 'nurseos', activeUsers: [] }];

function Content() {
  const [allChanels] = useState(defChanel);
  const [selectedChanel, setSelectedChanel] = useState(null);

  return (
    <div className="content">
      <Menu defChanel={allChanels} selectChanel={setSelectedChanel} />
      {selectedChanel && (
        <Users chanelInfo={selectedChanel} />
      )}
      <Chat chanelInfo={selectedChanel} />
    </div>
  );
}

export default Content;
