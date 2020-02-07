import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../graphql/queries';

import Cards from './Cards/Crads';
import TodayUser from './TodayUser/TodayUser';

import { WEEK_CHART } from './chart/weekChart';
import { MOTIVATION_CHART } from './chart/motivationChart';

import {
  StyledContent,
  OuterChartDiv,
  InnerChartDiv,
  Skeleton,
} from './Dashboard.styled';

const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <Skeleton />;
  if (error) return <Skeleton />;

  return (
    <StyledContent>
      <Cards {...{ loading, error, data }} />
      <TodayUser {...{ loading, error, data }} />
      <OuterChartDiv>
        <InnerChartDiv>
          <WEEK_CHART />
        </InnerChartDiv>
        <InnerChartDiv>
          <MOTIVATION_CHART />
        </InnerChartDiv>
      </OuterChartDiv>
    </StyledContent>
  );
};

export default Dashboard;
