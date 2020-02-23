import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Auth from './modalContents/Auth';
import AddNewChanel from './modalContents/AddNewChanel';

function Modal({
  title, type, setShowAddModal, chanels, setDefChanel,
}) {
  const [isModal, setIsModal] = useState(true);
  const [mdTitle] = useState(title);


  const modal = document.getElementById('myModal');
  const onModalHendler = () => {
    setIsModal(!isModal);
    if (type === 'add') {
      setShowAddModal(false);
    }
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
            {type === 'login' ? <Auth closeModal={setIsModal} /> : ''}
            {type === 'add' ? <AddNewChanel chanels={chanels} setDefChanel={setDefChanel} setShowAddModal={setShowAddModal} /> : ''}
          </div>
        </div>

      </div>
    </div>
  );
}

Modal.propTypes = {
  chanels: PropTypes.array,
  setDefChanel: PropTypes.func,
  setShowAddModal: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.string,
};
Modal.defaultProps = {
  setShowAddModal() {
    return null;
  },
};

export default Modal;
