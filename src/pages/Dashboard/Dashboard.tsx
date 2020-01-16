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
import { District_Chart } from './chart/districtChart';

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

const ChartDiv = styled.div`
  display: flex;
  background-color: #fff;
  padding-top: 40px;
  height: 500px;
  width: 100%;
  margin-bottom: 35px;
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
  let numberOfFollowing = 0;
  data.users.map((user) =>
    user.following.map((follwing) => {
      if (follwing.nickname) {
        numberOfFollowing += 1;
      }
    }),
  );
  let followingAverage = (numberOfFollowing / data.users.length).toFixed(2);

  return (
    <StyledContent>
      <NumberOfUserDiv>
        <StyledCard title="총 멤버">
          <NumberOfUserText>{data.users.length}</NumberOfUserText>
        </StyledCard>
        <StyledCard title="주간 신규 가입자">
          <NumberOfUserText>0</NumberOfUserText>
        </StyledCard>
        <StyledCard title="성비">
          <GENDER_CHART />
        </StyledCard>
      </NumberOfUserDiv>
      <ChartDiv>
        <WEEK_CHART />
      </ChartDiv>
      <NumberOfUserDiv>
        <StyledCard title="Google">
          <NumberOfUserText>{googleUser.length}</NumberOfUserText>
        </StyledCard>
        <StyledCard title="Facebook">
          <NumberOfUserText>{facebookUser.length}</NumberOfUserText>
        </StyledCard>
        <StyledCard title="평균 팔로잉/팔로우 수">
          <NumberOfUserText>{followingAverage}</NumberOfUserText>
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
      <NumberOfUserDiv>
        <StyledCard title="베스트 팔로우">
          <NumberOfUserText></NumberOfUserText>
        </StyledCard>
        <StyledCard title="베스트 팔로잉">
          <NumberOfUserText></NumberOfUserText>
        </StyledCard>
        <StyledCard title="베스트 지역">
          <NumberOfUserText></NumberOfUserText>
        </StyledCard>
        <StyledCard title="워스트 지역">
          <NumberOfUserText></NumberOfUserText>
        </StyledCard>
      </NumberOfUserDiv>
      <ChartDiv>
        <District_Chart />
      </ChartDiv>
    </StyledContent>
  );
};

export default Dashboard;
