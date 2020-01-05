import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERINFO, GET_USERS } from '../../graphql/queries';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Layout, Card, Button } from 'antd';

const { Content } = Layout;

const StyledContent = styled(Content)`
  padding: 24px;
  margin: 0;
`;

const NumberOfUser = styled(Card)`
  width: 280px;
  height: 230px;
`;

const TrafficSales = styled(Card)`
  alignitems: center;
  justifycontent: center;
  width: 100%;
  height: 450px;
  margin-bottom: 100px;
`;

function Dashboard() {
  const { data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  return (
    <StyledContent>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '35px',
        }}
      >
        <NumberOfUser title="총 멤버">
          {data ? <p>{data.users.length}</p> : <div>x</div>}
        </NumberOfUser>
        <NumberOfUser title="오늘의 신규 가입자"></NumberOfUser>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '35px',
        }}
      >
        <NumberOfUser title="Google">
          {data ? <p>{data.users.length}</p> : <div>x</div>}
        </NumberOfUser>
        <NumberOfUser title="Facebook"></NumberOfUser>
      </div>
      <TrafficSales title="traffic & sales">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '35px',
          }}
        >
          <Card></Card>
        </div>
      </TrafficSales>
    </StyledContent>
  );
}

export default Dashboard;
