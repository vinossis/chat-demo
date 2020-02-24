import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ChatMessage from './ChatMessage';

function ChatMessageHistory({ messages }) {
  const [localMessage, setLocalMessage] = useState(messages);

  useEffect(() => {
    setLocalMessage(messages);
  }, [messages]);

  return (
    <ul>
      {localMessage.lastMessages
        .slice(localMessage.lastMessages.length - 20, localMessage.lastMessages.length)
        .map((message, index) => (
          <li key={index}><ChatMessage message={message} /></li>
        ))}
    </ul>
  );
}

ChatMessageHistory.propTypes = {
  messages: PropTypes.object,
};
ChatMessageHistory.defaultProps = {};

export default ChatMessageHistory;
