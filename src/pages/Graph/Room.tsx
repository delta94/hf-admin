import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Room = ({ match }) => {
  const [room, setRoom] = useState(match.params.id);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>([]);

  const sendMessage = (event) => {
    event.preventDefault();
    messages.push(message);
    setMessages([...messages]);
    setMessage('');
  };
  return (
    <div>
      <Link to="/graph">back</Link>
      <div
        style={{
          width: '500px',
          height: '400px',
          backgroundColor: 'lightBlue',
          color: 'black',
        }}
      >
        {messages.map((message, i) => (
          <li key={i}>{message}</li>
        ))}
      </div>
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) =>
          event.key === 'Enter' ? sendMessage(event) : null
        }
      />
    </div>
  );
};

export default Room;
