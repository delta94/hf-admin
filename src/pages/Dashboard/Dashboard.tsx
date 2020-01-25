import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../graphql/queries';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import Cards from './Cards/Crads';
import TodayUser from './TodayUser/TodayUser';

import { District_Chart } from './chart/districtChart';
import { LEVELOF3DAE_CHART } from './chart/levelOf3DaeChart';
import { WEEK_CHART } from './chart/weekChart';
import { MOTIVATION_CHART } from './chart/motivationChart';

import {
  StyledContent,
  DashboardDiv1,
  StyledCard,
  CardSpan,
  OuterDiv,
  UserDiv,
  ChartDiv,
} from './Dashboard.styled';

const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });
  if (loading) return <>로딩</>;
  if (error)
    return (
      <StyledContent>
        <DashboardDiv1>
          <StyledCard
            style={{
              backgroundColor: 'rgb(47 125 247)',
            }}
          >
            <CardSpan />
          </StyledCard>
          <StyledCard
            style={{
              backgroundColor: 'rgb(246 194 68)',
            }}
          >
            <CardSpan />
          </StyledCard>
          <StyledCard
            style={{
              backgroundColor: 'rgb(83 164 81)',
            }}
          >
            <CardSpan />
          </StyledCard>
          <StyledCard
            style={{
              backgroundColor: 'rgb(203 68 75)',
            }}
          >
            <CardSpan />
          </StyledCard>
        </DashboardDiv1>
        <OuterDiv>
          <UserDiv style={{ backgroundColor: 'white' }}>
            <Table />
          </UserDiv>
          <ChartDiv>
            {' '}
            <District_Chart />{' '}
          </ChartDiv>
        </OuterDiv>
      </StyledContent>
    );

  return (
    <StyledContent>
      <Cards />
      <TodayUser />
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
