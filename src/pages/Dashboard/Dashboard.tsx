import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../graphql/queries';
import 'antd/dist/antd.css';

import Cards from './Cards/Crads';
import TodayUser from './TodayUser/TodayUser';

import { LEVELOF3DAE_CHART } from './chart/levelOf3DaeChart';
import { WEEK_CHART } from './chart/weekChart';
import { MOTIVATION_CHART } from './chart/motivationChart';

import { StyledContent } from './Dashboard.styled';

const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });
  if (loading) return <p>로딩 중...</p>;
  if (error) return <>로그인이 필요합니다</>;

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
