import React, { useEffect, useState } from 'react';
import Menu from '../menu/Menu';
import Chat from '../chat/Chat';
import Users from '../users/Users';

const defChanel = [
  { chanelId: '1', name: 'csruhub', activeUsers: ['Alex', 'John', 'Vasya', 'Andrey'] },
  { chanelId: '2', name: 'hydramist', activeUsers: ['Aleona', 'Timofey', 'Sasha', 'Kuzya'] },
  { chanelId: '3', name: 'rubendahouse', activeUsers: ['Leman', 'qwerty', 'Sima', 'Veronika', 'Anton'] },
  { chanelId: '4', name: 'nurseos', activeUsers: [] }];

function Content() {
  const [allChanels, setAllChanels] = useState(defChanel);
  const [selectedChanel, setSelectedChanel] = useState(null);


  return (
    <div className="content">
      <Menu defChanel={allChanels} selectChanel={setSelectedChanel} />
      {selectedChanel && (
        <Users chanelInfo={selectedChanel} />
      )}
      <Chat />
    </div>
  );
}

export default Content;
