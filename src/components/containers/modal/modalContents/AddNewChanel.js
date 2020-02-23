import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import messages from '../../../utils/messages';

function AddNewChanel({ chanels, setDefChanel, setShowAddModal }) {
  const [newChanelName, setNewChanelName] = useState('');
  const [isBlockButton, setIsBlockButton] = useState(true);
  const [localChanels, setLocalChanels] = useState(chanels);
  const [isChanelExists, setIsChanelExists] = useState(null);

  const changeNewChanelName = (event) => {
    const eventValue = event.target.value;
    setNewChanelName(eventValue.trim());
    setIsBlockButton(eventValue.length < 4);
  };


  const submitNewChanel = () => {
    const findChanelWithNewName = localChanels.some((item) => item.name === newChanelName);
    setIsChanelExists(findChanelWithNewName);

    if (!isChanelExists) {
      const localChanel = [...localChanels, {
        chanelId: chanels.length + 1,
        name: newChanelName,
        activeUsers: [],
      }];
      setLocalChanels(localChanel);
      setDefChanel(localChanel);
      setShowAddModal(false);
    }
  };
  useEffect(() => {
    setLocalChanels(chanels);
  }, [setDefChanel]);

  return (
    <div className="auth">
      <p>{messages.ADD_NEW_CHANEL}</p>
      <input onChange={changeNewChanelName} type="text" value={newChanelName} />
      <button disabled={isBlockButton} onClick={submitNewChanel}>{messages.ADD}</button>
    </div>
  );
}

AddNewChanel.propTypes = {
  chanels: PropTypes.array,
  setDefChanel: PropTypes.func,
  setShowAddModal: PropTypes.func,
};

export default AddNewChanel;
