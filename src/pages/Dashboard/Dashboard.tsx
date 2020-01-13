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

import GoogleLogo from '../../assets/GoogleLogo.png';

// 평균 팔로잉, 팔로워

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

const StyledCard = styled(Card)`
  width: 280px;
  height: 230px;
  text-align: center;
`;

const NumberOfUserText = styled.div`
  vertical-align: middle;
  margin: 30px 0;
  height: 100%;
  width: 100%;
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
  display: flex;
  background-color: #fff;
  padding-top: 70px;
  height: 500px;
  width: 100%;
  margin-bottom: 100px;
`;

const LevelOf3DaeDiv = styled.div`
  height: 400px;
  width: 48%;
`;

const MotivationDiv = styled.div`
  height: 400px;
  width: 48%;
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
        <StyledCard title="총 멤버">
          <NumberOfUserText>{data.users.length}</NumberOfUserText>
        </StyledCard>
        <StyledCard title="오늘의 신규 가입자"></StyledCard>
        <StyledCard title="주간 신규 가입자"></StyledCard>
      </NumberOfUserDiv>
      <NumberOfUserDiv>
        <StyledCard title="Google">
          <NumberOfUserText>{googleUser.length}</NumberOfUserText>
        </StyledCard>
        <StyledCard title="Facebook">
          <NumberOfUserText>{facebookUser.length}</NumberOfUserText>
        </StyledCard>
        <StyledCard title="성비">
          <GENDER_CHART />
        </StyledCard>
      </NumberOfUserDiv>

      <ChartDiv>
        <LevelOf3DaeDiv>
          <LEVELOF3DAE_CHART />
        </LevelOf3DaeDiv>
        <MotivationDiv>
          <MOTIVATION_CHART />
        </MotivationDiv>
      </ChartDiv>

      <ChartDiv>
        <WEEK_CHART />
      </ChartDiv>
    </StyledContent>
  );
};

export default Dashboard;
