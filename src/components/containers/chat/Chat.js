import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import messages from '../../utils/messages';
import ChatMessageHistory from './ChatMessageHistory';
import { useAuth } from '../../../hooks/auth.hooks';

function Chat({ chanelInfo }) {
  const [info, setInfo] = useState(chanelInfo);
  const [inputText, setInputText] = useState('');
  const { name } = useAuth();

  useEffect(() => {
    setInfo(chanelInfo);
  }, [chanelInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = Object.assign(info, { lastMessages: [...info.lastMessages, { user: name || 'Гость', message: inputText }] });
    setInfo(newObj);
    setInputText('');
  };

  if (info) {
    return (
      <div className="chat_wrapper">

        <div className="chat_window">
          <scroll-container>
            <ChatMessageHistory messages={info} />
          </scroll-container>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="chat_form">
            <div className="chat_form_area">
              <input onChange={(e) => setInputText(e.target.value)} type="text" value={inputText} />
            </div>
            <div className="chat_form_submit">
              <button>{messages.SEND_MESSAGE}</button>
            </div>
          </div>
        </form>
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
