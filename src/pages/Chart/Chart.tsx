import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../graphql/queries';
import 'antd/dist/antd.css';
import { Table, Divider } from 'antd';

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
    sorter: (a, b) => {
      return a.email.localeCompare(b.email);
    },
  },
  {
    title: 'Nickname',
    dataIndex: 'nickname',
    key: 'nickname',
    sorter: (a, b) => {
      console.log(a);
      a = a.nickname || '';
      b = b.nickname || '';
      return a.localeCompare(b);
    },
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
  {
    title: 'Action',
    dataIndex: 'role',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>Message {record.lastName}</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    ),
  },
];

export const Chart = () => {
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 :(</p>;

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
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={{ pageSize: 5 }}
    />
  );
};

export default Chart;
