import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { SET_CHAT_FRIEND, GET_CHAT_FRIEND } from '../../graphql/queries';
const User = () => {
  const [friend, setFriend] = useState('');

  const onFrined = (e) => {
    setFriend(e.name);
    console.log(e.name);
  };

  return (
    <div>
      <div>
        <Link
          to={`/graph/${friend}`}
          style={{ cursor: 'pointer', marginRight: '20px' }}
          name="user1"
          onClick={() => {
            setFriend('user1');
            console.log(friend);
          }}
        >
          user1
        </Link>
        <Link
          to={`/graph/${friend}`}
          style={{ cursor: 'pointer', marginRight: '20px' }}
          onClick={() => {
            setFriend('user2');
            console.log(friend);
          }}
        >
          user2
        </Link>
        <Link
          to={`/graph/${friend}`}
          style={{ cursor: 'pointer', marginRight: '20px' }}
          onClick={() => {
            setFriend('user3');
            console.log(friend);
          }}
        >
          user3
        </Link>
        <Link
          to={`/graph/${friend}`}
          style={{ cursor: 'pointer', marginRight: '20px' }}
          onClick={() => {
            setFriend('user4');
            console.log(friend);
          }}
        >
          user4
        </Link>
      </div>
    </div>
  );
};

export default User;
