import React, { useState } from 'react';
import PropTypes from 'prop-types';
import messages from '../../../utils/messages';
import { useAuth } from '../../../../hooks/auth.hooks';

function Auth({ closeModal }) {
  const [localUserName, setLocalUserName] = useState('');
  const { login, setIsAuth } = useAuth();
  const [isBlockButton, setIsBlockButton] = useState(true);

  const changeUserName = (event) => {
    const eventValue = event.target.value;
    setLocalUserName(eventValue.trim());
    setIsBlockButton(eventValue.length < 2);
  };

  const submitAuthParam = () => {
    login(localUserName);
    setIsAuth(true);
    closeModal(false);
  };
  return (
    <div className="auth">
      <p>{messages.MIN_AUTH_NAME}</p>
      <input onChange={changeUserName} type="text" value={localUserName} />
      <button disabled={isBlockButton} onClick={submitAuthParam}>{messages.AUTH}</button>
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
