import React from 'react';
import { District_Chart } from '../chart/districtChart';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Table } from 'antd';
const columns = [
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  { title: 'Nickname', dataIndex: 'nickname', key: 'nickname' },
  { title: 'CreatedAt', dataIndex: 'createdAt', key: 'createdAt' },
  {
    title: 'Action',
    dataIndex: 'Action',
    key: 'Action',
    render: (text, record) => {
      return (
        <span>
          <a>Message</a>
        </span>
      );
    },
  },
];

const OuterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 240px;
`;

const UserDiv = styled.div`
  margin-top: 20px;
  height: 80%;
  width: 68%;
  overflow: scroll;
`;

const ChartDiv = styled.div`
  height: 90%;
  width: 30%;
`;

const TodayUser = () => {
  return (
    <OuterDiv>
      <UserDiv>
        <span style={{ position: 'relative', left: '10px', fontSize: '20px' }}>
          Today's Users
        </span>
        <Table columns={columns} />
      </UserDiv>
      <ChartDiv>
        <District_Chart />
      </ChartDiv>
    </OuterDiv>
  );
};

export default TodayUser;
