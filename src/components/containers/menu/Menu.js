import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Menu({ defChanel, selectChanel }) {
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
                  selectChanel(chanel);
                }}
              >
                {chanel.name}
              </a>
            </li>
          ))
        )}
        <li><a href="" onClick={() => selectChanel(null)}>Покинуть канал</a></li>
      </ul>
    </div>
  );
}

Menu.propTypes = {
  defChanel: PropTypes.array,
  selectChanel: PropTypes.func,
};

export default Menu;
