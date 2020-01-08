import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../../graphql/queries';

import 'antd/dist/antd.css';

const UserInfo = () => {
  const { data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  return (
    <table>
      <thead>
        <tr style={{ borderBottom: '1px solid lightblue' }}>
          <th scope="col">email</th>
          <th scope="col">nickname</th>
          <th scope="col">삼대중량</th>
          <th scope="col">createdAt</th>
          <th scope="col">role</th>
        </tr>
      </thead>
      <tbody>
        {data ? (
          data.users.map((user) => (
            <tr key={user.id}>
              <th scope="row">
                <Link to={`/users/${user.nickname}`}>{user.email}</Link>
              </th>
              <td>
                <Link to={`/users/${user.nickname}`}>{user.nickname}</Link>
              </td>
              <td>{user.levelOf3Dae}</td>
              <td>2020-01-7</td>
              <td>게스트</td>
            </tr>
          ))
        ) : (
          <tr>
            <th></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserInfo;
