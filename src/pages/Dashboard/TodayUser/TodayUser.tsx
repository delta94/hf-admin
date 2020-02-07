import React, { useState } from 'react';
import { District_Chart } from '../chart/districtChart';
import styled from 'styled-components';
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

const TodayUser = ({ loading, error, data }) => {
  const [user, setUser] = useState(null);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 :(</p>;

  const columns = [
    {
      title: 'Picture',
      dataIndex: 'picture',
      key: 'picture',
      render: (text, record) => {
        return (
          <img
            src={record.picture}
            style={{ width: '40px', borderRadius: '50%' }}
          />
        );
      },
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
            <div>
              <a
                onClick={() => {
                  setUser(record.key);
                }}
              >
                Message
              </a>
            </div>
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
          picture: user.profileImage[0] ? user.profileImage[0].filename : null,
          email: user.email,
          nickname: user.nickname,
          createdAt: user.createdAt.slice(0, 10),
        };
      } else return null;
    })
    .filter((user) => user);

  return (
    <OuterDiv>
      <UserDiv style={{ backgroundColor: 'white' }}>
        <span style={{ position: 'relative', left: '10px', fontSize: '20px' }}>
          신규 회원: {dataSource.length}
        </span>
        <Table columns={columns} dataSource={dataSource} />
      </UserDiv>
      <ChartDiv>
        <District_Chart />
      </ChartDiv>
      {user ? <Message id={user} /> : null}
    </OuterDiv>
  );
};

export default TodayUser;
