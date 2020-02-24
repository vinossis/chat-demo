import React from 'react';
import PropTypes from 'prop-types';

function ChatMessage({ message, user }) {
  return (
    <p style={{ marginBottom: 0 }}>
      {message.user}
      <br />
      <small>{message.message}</small>
    </p>
  );
}

ChatMessage.propTypes = {};
ChatMessage.defaultProps = {};

export default ChatMessage;
