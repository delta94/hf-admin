import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../graphql/queries';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
const User = () => {
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 :(</p>;
  // console.log(data.users[0].profileImage);
  return (
    <div>
      {data.users.map((user, i) => (
        <li key={`${user.id}`}>
          {user.profileImage.length > 0 ? (
            <Avatar size="large" src={`${user.profileImage.filename}`} />
          ) : (
            <Avatar size="large" icon="user" />
          )}

          <Link to={`/graph/${i}`}>{user.nickname}</Link>
        </li>
      ))}
    </div>
  );
};

export default User;
