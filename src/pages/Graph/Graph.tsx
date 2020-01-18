import React, { useState, useEffect, Component } from 'react';
import { Route } from 'react-router-dom';

import 'antd/dist/antd.css';

import User from './User';
import Room from './Room';

export const Graph = ({ match }) => {
  //   const [message, setMessage] = useState('');
  //   const [friend, setFriend] = useState('');
  //   const [messages, setMessages] = useState<any[]>([]);

  //   useEffect(() => {
  //     setFriend(friend);
  //   }, [friend]);

  //   console.log('test path', match);

  //   const sendMessage = (event) => {
  //     event.preventDefault();
  //     messages.push(message);
  //     setMessages([...messages]);
  //     setMessage('');
  //   };

  return (
    <div>
      <Route path={match.path} component={User} />
      <Route path={`${match.path}/:id`} component={Room} />
    </div>
  );
};

export default Graph;
