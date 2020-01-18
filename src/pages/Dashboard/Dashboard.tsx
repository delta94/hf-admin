import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../graphql/queries';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Layout, Card, Icon } from 'antd';

import { GENDER_CHART } from './chart/genderChart';
import { LEVELOF3DAE_CHART } from './chart/levelOf3DaeChart';
import { WEEK_CHART } from './chart/weekChart';
import { MOTIVATION_CHART } from './chart/motivationChart';
import { District_Chart } from './chart/districtChart';

const { Content } = Layout;

const StyledContent = styled(Content)`
  padding: 10px 24px;
  margin: 0;
  overflow: scroll;
`;

const DashboardDiv1 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledCard = styled(Card)`
  width: 23%;
  height: 100px;
  border-radius: 20px;
`;

const CardSpan = styled.span`
  position: relative;
  top: -12px;
  color: white;
  cursor: pointer;
`;

const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 :(</p>;

  let googleUser = data.users.filter((user) => user.provider === 'GOOGLE');
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
      <h1>Dashboard</h1>
      <DashboardDiv1>
        <StyledCard
          title={
            <span style={{ color: 'white' }}>
              {googleUser.length} Total Users <Icon type="usergroup-add" />
            </span>
          }
          style={{
            backgroundColor: 'rgb(47 125 247)',
          }}
        >
          <CardSpan>
            <a href="/users" style={{ textDecoration: 'none', color: 'white' }}>
              view detail
            </a>
          </CardSpan>
        </StyledCard>
        <StyledCard
          title={
            <span style={{ color: 'white' }}>
              Best Users <Icon type="crown" theme="twoTone" />
            </span>
          }
          style={{
            backgroundColor: 'rgb(246 194 68)',
          }}
        >
          <CardSpan>view detail</CardSpan>
        </StyledCard>
        <StyledCard
          title={
            <span style={{ color: 'white' }}>
              {followingAverage} Avg Followers{' '}
              <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
            </span>
          }
          style={{
            backgroundColor: 'rgb(83 164 81)',
          }}
        >
          <CardSpan>view detail</CardSpan>
        </StyledCard>
        <StyledCard
          title={
            <span style={{ color: 'white' }}>
              Gender graph <Icon type="bar-chart" />
            </span>
          }
          style={{
            backgroundColor: 'rgb(203 68 75)',
          }}
        >
          <CardSpan>view detail</CardSpan>
        </StyledCard>
      </DashboardDiv1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          style={{
            backgroundColor: 'white',
            marginTop: '20px',
            width: '100%',
            height: '200px',
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              marginTop: '20px',
              height: '80%',
              width: '68%',
              border: '1px  solid  black',
            }}
          >
            오늘 가입한 유저 정보
          </div>
          <div
            style={{
              marginTop: '20px',
              height: '80%',
              width: '30%',
              border: '1px  solid  black',
            }}
          >
            오늘 가입한 유저의 지역 정보
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          style={{
            backgroundColor: 'white',
            marginTop: '20px',
            width: '49%',
            height: '200px',
          }}
        >
          <WEEK_CHART />
        </div>
        <div
          style={{
            backgroundColor: 'white',
            marginTop: '20px',
            width: '49%',
            height: '200px',
          }}
        >
          <MOTIVATION_CHART />
        </div>
      </div>
    </StyledContent>
  );
};

export default Dashboard;
