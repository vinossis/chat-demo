import React from 'react';
import messages from '../../utils/messages';

function Chat() {
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

export default Chat;
