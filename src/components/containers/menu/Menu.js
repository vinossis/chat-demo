import React, { useState } from 'react';

const defChanel = [
  { chanelId: '1', name: 'csruhub' },
  { chanelId: '2', name: 'hydramist' },
  { chanelId: '3', name: 'rubendahouse' },
  { chanelId: '4', name: 'nurseos' }];

function Menu() {
  const [chanels] = useState(defChanel);
  const [currentSelectedChanel, setCurrentSelectedChanel] = useState('');
  return (
    <div className="menu">
      <ul>
        {chanels && (
          chanels.map((chanel) => (
            <li key={chanel.chanelId}>
              <a
                className={chanel.chanelId === currentSelectedChanel ? 'active' : ''}
                href='#'
                onClick={() => setCurrentSelectedChanel(chanel.chanelId)}
              >
                {chanel.name}
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Menu;
