import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../graphql/queries';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Layout, Card } from 'antd';

import { GENDER_CHART } from './chart/genderChart';
import { LEVELOF3DAE_CHART } from './chart/levelOf3DaeChart';
import { MOTIVATION_CHART } from './chart/motivationChart';
import { WEEK_CHART } from './chart/weekChart';

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
  text-align: center;
`;

const NumberOfUserText = styled.p`
  vertical-align: middle;
  margin: 30px;
  font-size: 30px;
`;

const Chart = styled(Card)`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;
  margin-bottom: 100px;
`;

const ChartDiv = styled.div`
  height: 400px;
  width: 100%;
`;

const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 :(</p>;

  let googleUser = data.users.filter((user) => user.provider === 'GOOGLE');
  let facebookUser = data.users.filter((user) => user.provider === 'FACEBOOK');

  return (
    <StyledContent>
      <NumberOfUserDiv>
        <NumberOfUserCard title="총 멤버">
          <NumberOfUserText>{data.users.length}</NumberOfUserText>
        </NumberOfUserCard>
        <NumberOfUserCard title="오늘의 신규 가입자"></NumberOfUserCard>
        <NumberOfUserCard title="주간 신규 가입자"></NumberOfUserCard>
      </NumberOfUserDiv>
      <NumberOfUserDiv>
        <NumberOfUserCard title="Google">
          <NumberOfUserText>{googleUser.length}</NumberOfUserText>
        </NumberOfUserCard>
        <NumberOfUserCard title="Facebook">
          <NumberOfUserText>{facebookUser.length}</NumberOfUserText>
        </NumberOfUserCard>
        <NumberOfUserCard title="성비">
          <GENDER_CHART />
        </NumberOfUserCard>
      </NumberOfUserDiv>
      <Chart>
        <ChartDiv>
          <LEVELOF3DAE_CHART />
        </ChartDiv>
      </Chart>
      <Chart>
        <ChartDiv>
          <MOTIVATION_CHART />
        </ChartDiv>
      </Chart>
      <Chart>
        <ChartDiv>
          <WEEK_CHART />
        </ChartDiv>
      </Chart>
    </StyledContent>
  );
};

export default Dashboard;
