import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../../graphql/queries';

import 'antd/dist/antd.css';

const UserInfo = () => {
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 :(</p>;

  return (
    <table>
      <thead>
        <tr style={{ borderBottom: '1px solid lightblue' }}>
          <th scope="col">id</th>
          <th scope="col">email</th>
          <th scope="col">nickname</th>
          <th scope="col">삼대중량</th>
          <th scope="col">createdAt</th>
          <th scope="col">role</th>
        </tr>
      </thead>
      <tbody>
        {data.users.map((user, i) => (
          <tr key={user.id}>
            <th>
              <Link to={`/users/${i}`}>{i}</Link>
            </th>
            <td scope="row">
              <Link to={`/users/${i}`}>{user.email}</Link>
            </td>
            <td>
              <Link to={`/users/${i}`}>{user.nickname}</Link>
            </td>
            <td>{user.levelOf3Dae}</td>
            <td>{user.createdAt.slice(0, 10)}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserInfo;
