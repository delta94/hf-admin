import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../../graphql/queries';
import styled from 'styled-components';

const MainDiv = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  && th,
  td {
    border-top: 1px solid #444444;
    border-bottom: 1px solid #444444;
    padding: 10px;
    text-align: center;
  }
  thead tr {
    background-color: #0d47a1;
    color: #ffffff;
  }
  tbody tr:nth-child(2n) {
    background-color: #d1d1d1;
  }
  tbody tr:nth-child(2n + 1) {
    background-color: #fff;
  }
`;

function UserDetail({ match, history }) {
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 :(</p>;

  const motivation = data.users[match.params.id].motivations
    .map((user) => user.motivation)
    .join(',  ');
  const createdAt = data.users[match.params.id].createdAt.slice(0, 10);
  const weekdays = data.users[match.params.id].weekdays
    .map((user) => user.weekday)
    .join(',  ');

  return (
    <MainDiv>
      <div>
        <span style={{ marginRight: '40px' }}>
          {data.users[match.params.id].nickname}님의 정보
        </span>
        <Link to="/users">Back</Link>
      </div>

      <Table>
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
            <td>createdAt</td>
            <td>{createdAt}</td>
          </tr>
          <tr>
            <td>messageToFriend:</td>
            <td>{data.users[match.params.id].messageToFriend}</td>
          </tr>
        </tbody>
      </Table>
    </MainDiv>
  );
}

export default UserDetail;
