import React, { useState } from 'react';
import PropTypes from 'prop-types';

const defChanel = [
  { chanelId: '1', name: 'csruhub' },
  { chanelId: '2', name: 'hydramist' },
  { chanelId: '3', name: 'rubendahouse' },
  { chanelId: '4', name: 'nurseos' }];

function Menu(props) {
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
                href="#33"
                onClick={() => {
                  setCurrentSelectedChanel(chanel.chanelId);
                  props.selectChanel(chanel.name);
                }}
              >
                {chanel.name}
              </a>
            </li>
          ))
        )}
        <li><a href="" onClick={() => props.selectChanel(false)}>Покинуть канал</a></li>
      </ul>
    </div>
  );
}

Menu.propTypes = {
  selectChanel: PropTypes.func,
};

export default Menu;
