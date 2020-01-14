import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../graphql/queries';
import 'antd/dist/antd.css';
import { Table } from 'antd';

export const Chart = () => {
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 :(</p>;

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      render: (text) => <a href={`/users/${text}`}>{text}</a>,
      key: 'id',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Nickname',
      dataIndex: 'nickname',
      key: 'nickname',
    },
    {
      title: '삼대중량',
      dataIndex: 'levelOf3Dae',
      key: 'levelOf3Dae',
    },
    {
      title: 'CreatedAt',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
  ];

  let dataSource = data.users.map((user, i) => {
    return {
      id: i,
      email: user.email,
      nickname: user.nickname,
      levelOf3Dae: user.levelOf3Dae,
      createdAt: user.createdAt.slice(0, 10),
      role: user.role,
    };
  });

  return (
    <div style={{ width: '500px' }}>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 10 }}
      />
      ,
    </div>
  );
};

export default Chart;
