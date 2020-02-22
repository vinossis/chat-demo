import React, { useState } from 'react';
import PropTypes from 'prop-types';

import messages from '../../utils/messages';

function Menu({ defChanel, selectChanel }) {
  const [chanels] = useState(defChanel);
  const [currentSelectedChanel, setCurrentSelectedChanel] = useState('');

  return (
    <div className="menu">
      <ul>
        <li>
          <a href="#2">{messages.CREATE_CHANEL}</a>
        </li>
      </ul>
      <div className="line" />
      <ul>
        {chanels && (
          chanels.map((chanel) => (
            <li key={chanel.chanelId}>
              <a
                className={chanel.chanelId === currentSelectedChanel ? 'active' : ''}
                href="#33"
                onClick={() => {
                  setCurrentSelectedChanel(chanel.chanelId);
                  selectChanel(chanel);
                }}
              >
                {chanel.name}
              </a>
            </li>
          ))
        )}
        <div className="line" />
        <li>
          <a
            href="#44"
            onClick={() => {
              selectChanel('');
              setCurrentSelectedChanel('');
            }}
          >
            {messages.EXIT_CHANEL}
          </a>
        </li>
      </ul>
    </div>
  );
}

Menu.propTypes = {
  defChanel: PropTypes.array,
  selectChanel: PropTypes.func,
};

export default Menu;
