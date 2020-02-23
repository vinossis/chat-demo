import React, { useState } from 'react';
import PropTypes from 'prop-types';
import messages from '../../../utils/messages';
import { useAuth } from '../../../../hooks/auth.hooks';

function Auth({ closeModal }) {
  const [localUserName, setLocalUserName] = useState('');
  const { login, setIsAuth } = useAuth();

  const changeUserName = (event) => {
    const eventValue = event.target.value;
    setLocalUserName(eventValue);
  };

  const submitAuthParam = () => {
    login(localUserName);
    setIsAuth(true);
    closeModal(false);
  };
  return (
    <div className="auth">
      <input onChange={changeUserName} type="text" value={localUserName} />
      <button onClick={submitAuthParam}>{messages.AUTH}</button>
    </div>
  );
}

Auth.propTypes = {
  closeModal: PropTypes.func,
};
Auth.defaultProps = {
  closeModal() {
    return null;
  },
};
export default Auth;
