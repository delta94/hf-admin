import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../../graphql/queries';

import 'antd/dist/antd.css';

const UserInfo = () => {
  const { data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  return (
    <tbody>
      {data ? (
        data.users.map((user) => (
          <tr key={user.id}>
            <td>{user.email}</td>
            <td>{user.nickname}</td>
            <td>{user.levelOf3Dae}</td>
            <td>2020-01-7</td>
            <td>게스트</td>
          </tr>
        ))
      ) : (
        <tr>
          <th scope="row">x</th>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
        </tr>
      )}
    </tbody>
  );
};

export default UserInfo;
