import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import messages from '../../utils/messages';

function Chat({ chanelInfo }) {
  const [info, setInfo] = useState(chanelInfo);

  useEffect(() => {
    setInfo(chanelInfo);
  }, [chanelInfo]);

  if (info) {
    return (
      <div className="chat_wrapper">
        <div className="chat_window">
          123
        </div>
        <div className="chat_form">
          <div className="chat_form_area">
            <textarea id="" name="" />
          </div>
          <div className="chat_form_submit">
            <button>{messages.SEND_MESSAGE}</button>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="chat_wrapper" style={{ padding: '8px' }}>
      {messages.SELECT_CHANEL}
    </div>
  );
}

Chat.propTypes = {
  chanelInfo: PropTypes.oneOfType([() => null, PropTypes.object]),
};
export default Chat;
