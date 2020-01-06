import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../graphql/queries';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Layout, Card, Button } from 'antd';

import { GENDER_CHART } from '../../chart/genderChart';

const { Content } = Layout;

const StyledContent = styled(Content)`
  padding: 24px;
  margin: 0;
`;

const NumberOfUserDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 35px;
`;

const NumberOfUserCard = styled(Card)`
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

const Dashboard = () => {
  const { data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  let googleUser, facebookUser, male, female;
  if (data) {
    googleUser = data.users.filter((user) => user.provider === 'GOOGLE');
    facebookUser = data.users.filter((user) => user.provider === 'FACEBOOK');
    male = data.users.filter((user) => user.gender === 'MALE');
    female = data.users.filter((user) => user.gender === 'FEMALE');
  }

  return (
    <StyledContent>
      <NumberOfUserDiv>
        <NumberOfUserCard title="총 멤버">
          {data ? <p>{data.users.length}</p> : <div>x</div>}
        </NumberOfUserCard>
        <NumberOfUserCard title="오늘의 신규 가입자"></NumberOfUserCard>
        <NumberOfUserCard title="주간 신규 가입자"></NumberOfUserCard>
      </NumberOfUserDiv>
      <NumberOfUserDiv>
        <NumberOfUserCard title="Google">
          {data ? <p>{googleUser.length}</p> : <div>x</div>}
        </NumberOfUserCard>
        <NumberOfUserCard title="Facebook">
          {data ? <p>{facebookUser.length}</p> : <div>x</div>}
        </NumberOfUserCard>
        <NumberOfUserCard title="성비">
          <GENDER_CHART />
        </NumberOfUserCard>
      </NumberOfUserDiv>
      <TrafficSales title="traffic & sales">
        <Card></Card>
      </TrafficSales>
    </StyledContent>
  );
};

export default Dashboard;
