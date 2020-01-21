import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../graphql/queries';
import { Link } from 'react-router-dom';

const User = () => {
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 :(</p>;

  return (
    <div>
      {data.users.map((user) => (
        <li key={`${user.id}`}>
          <Link to={`/graph/${user.nickname}`}>{user.nickname}</Link>
        </li>
      ))}
    </div>
  );
};

export default User;
