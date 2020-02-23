import React from 'react';
import { useAuth } from '../../../hooks/auth.hooks';
import messages from '../../utils/messages';

function Header() {
  const { name } = useAuth();

  return (
    <div className="header">
      <div>
        {messages.WELCOME}
        ,
        {' '}
        {name || 'Гость'}
        !
      </div>
    </div>
  );
}

export default Header;
