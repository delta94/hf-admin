import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../../graphql/queries';
import { District_Chart } from '../chart/districtChart';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Table } from 'antd';

import { todayDate } from '../../../utils/todayDate';

import Message from '../../../components/Message/Message';

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
  border-radius: 20px;
  overflow: scroll;
`;

const ChartDiv = styled.div`
  height: 90%;
  width: 30%;
`;

const TodayUser = () => {
  const [id, setId] = useState(null);

  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });
  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 :(</p>;

  const columns = [
    {
      title: 'Picture',
      dataIndex: 'picture',
      key: 'picture',
    },
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
            <a
              onClick={() => {
                setId(record.key);
              }}
            >
              Message
            </a>
          </span>
        );
      },
    },
  ];

  let dataSource = data.users
    .map((user) => {
      if (user.createdAt.slice(0, 10) === todayDate()) {
        return {
          key: user.id,
          email: user.email,
          nickname: user.nickname,
          createdAt: user.createdAt.slice(0, 10),
        };
      } else return null;
    })
    .filter((user) => user);

  // let test = data.users.map((user) => {
  //   if (user.createdAt.slice(0, 10) === todayDate()) {
  //     return {
  //       createdAt: user.createdAt.slice(0, 10),
  //     };
  //   }
  // });

  // console.log(test);

  return (
    <OuterDiv>
      <UserDiv style={{ backgroundColor: 'white' }}>
        <span style={{ position: 'relative', left: '10px', fontSize: '20px' }}>
          New Users: {dataSource.length}
        </span>
        <Table columns={columns} dataSource={dataSource} />
      </UserDiv>
      <ChartDiv>
        <District_Chart />
      </ChartDiv>
      {id ? <Message id={id} /> : null}
    </OuterDiv>
  );
};

export default TodayUser;
