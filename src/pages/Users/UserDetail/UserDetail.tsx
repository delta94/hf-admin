import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../../graphql/queries';

function UserDetail({ match, history }) {
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 :(</p>;

  const motivation = data.users[match.params.id].motivations
    .map((user) => user.motivation)
    .join(',  ');

  const weekdays = data.users[match.params.id].weekdays
    .map((user) => user.weekday)
    .join(',  ');

  return (
    <>
      <Link to="/users">Back</Link>
      <div>
        <span>유저 디테일</span>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>id</td>
              <td>{data.users[match.params.id].id}</td>
            </tr>
            <tr>
              <td>email</td>
              <td>{data.users[match.params.id].email}</td>
            </tr>
            <tr>
              <td>nickname</td>
              <td>{data.users[match.params.id].nickname}</td>
            </tr>
            <tr>
              <td>motivations</td>
              <td>{motivation}</td>
            </tr>
            <tr>
              <td>weekdays</td>
              <td>{weekdays}</td>
            </tr>
            <tr>
              <td>messageToFriend</td>
              <td>{data.users[match.params.id].messageToFriend}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserDetail;
