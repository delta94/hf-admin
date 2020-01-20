import React from 'react';

import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Layout } from 'antd';

import Cards from './Cards/Crads';

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

const Dashboard = () => {
  return (
    <StyledContent>
      <h1>Dashboard</h1>
      <Cards />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          style={{
            width: '100%',
            height: '200px',
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
            오늘 가입한 유저 정보 (테이블 형태)
          </div>
          <div
            style={{
              // marginTop: '20px',
              height: '90%',
              width: '30%',
              // border: '1px  solid  black',
            }}
          >
            <District_Chart />
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
