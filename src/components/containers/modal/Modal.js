import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Auth from './modalContents/Auth';

function Modal({ title }) {
  const [isModal, setIsModal] = useState(true);
  const [mdTitle] = useState(title);


  const modal = document.getElementById('myModal');
  const onModalHendler = () => {
    setIsModal(!isModal);
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      setIsModal(false);
    }
  };

  return (
    <div>
      <div className="modal" id="myModal" style={isModal ? { display: 'block' } : { display: 'none' }}>
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={onModalHendler}>&times;</span>
            <h2>{mdTitle}</h2>
          </div>
          <div className="line" />
          <div className="modal-body">
            <Auth closeModal={setIsModal} />
          </div>
        </div>

      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
};


export default Modal;
