import React from 'react';
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
  return (
    <StyledContent>
      <Button type="primary" size="large">
        <a href={'http://localhost:4000/auth/google'}>구글로그인</a>
      </Button>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '35px',
        }}
      >
        <NumberOfUser title="총 멤버"></NumberOfUser>
        <NumberOfUser title="오늘의 신규 가입자"></NumberOfUser>
        <NumberOfUser title="온라인 멤버"></NumberOfUser>
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
