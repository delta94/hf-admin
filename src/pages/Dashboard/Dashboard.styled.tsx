import React from 'react';

import styled from 'styled-components';
import 'antd/dist/antd.css';
import { District_Chart } from './chart/districtChart';

import { WEEK_CHART } from './chart/weekChart';
import { MOTIVATION_CHART } from './chart/motivationChart';
import { Card, Layout, Table } from 'antd';

const { Content } = Layout;

export const StyledContent = styled(Content)`
  padding: 10px 24px;
  margin: 0;
  overflow: scroll;
`;

// cards
export const DashboardDiv1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const StyledCard = styled(Card)`
  width: 23%;
  height: 120px;
  border-radius: 20px;
`;

export const CardSpan = styled.span`
  position: relative;
  top: -12px;
  color: white;
  cursor: pointer;
`;

// todayuser

export const OuterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 240px;
`;

export const UserDiv = styled.div`
  margin-top: 20px;
  height: 80%;
  width: 68%;
  border-radius: 20px;
  overflow: scroll;
`;

export const ChartDiv = styled.div`
  height: 90%;
  width: 30%;
`;

// chart

export const OuterChartDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InnerChartDiv = styled.div`
  background-color: white;
  margin-top: 20px;
  width: 49%;
  height: 200px;
`;

export const Skeleton = () => {
  return (
    <StyledContent style={{ opacity: '0.5' }}>
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
          <District_Chart />
        </ChartDiv>
      </OuterDiv>

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

export const CardLoading = () => {
  return (
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
  );
};
