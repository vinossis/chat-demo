import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import messages from '../../utils/messages';
import { useAuth } from '../../../hooks/auth.hooks';
import Modal from '../modal/Modal';

function Menu({ selectChanel, defChanel, setDefChanel }) {
  const [chanels, setChanels] = useState(defChanel);
  const [currentSelectedChanel, setCurrentSelectedChanel] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const { isAuth, logout } = useAuth();

  useEffect(() => {
    setChanels(defChanel);
  }, [setDefChanel, defChanel]);

  return (
    <div className="menu">
      {showAddModal
        ? (
          <Modal
            chanels={chanels}
            setDefChanel={setDefChanel}
            setShowAddModal={setShowAddModal}
            title={messages.ADD_NEW_CHANEL}
            type="add"
          />
        )
        : ''}
      {
        isAuth && (
          <ul>
            <li>
              <a href="#2" onClick={() => setShowAddModal(true)}>{messages.CREATE_CHANEL}</a>
            </li>
          </ul>
        )
      }
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
        <div className="line" />

        {isAuth && (
          <li>
            <a
              href="#44"
              onClick={() => logout()}
            >
              {messages.EXIT_ACCOUNT}
            </a>
          </li>
        )}

      </ul>
    </div>
  );
}

Menu.propTypes = {
  defChanel: PropTypes.array,
  selectChanel: PropTypes.func,
  setDefChanel: PropTypes.func,
};

export default Menu;
