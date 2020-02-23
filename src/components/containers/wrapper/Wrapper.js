import React, { useState } from 'react';
import Header from '../header/Header';
import Content from '../content/Content';
import Modal from '../modal/Modal';
import { useAuth } from '../../../hooks/auth.hooks';

function Wrapper() {
  const [modalTitle] = useState('Введите ваш ник:');
  const { isAuth } = useAuth();

  return (
    <div className="wrapper">
      {!isAuth && <Modal title={modalTitle} type="login" />}
      <Header />
      <Content />
    </div>
  );
}

export default Wrapper;
