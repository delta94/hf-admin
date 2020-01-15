import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../../graphql/queries';
import 'antd/dist/antd.css';
import { Table, Tag } from 'antd';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => (
      <a style={{ cursor: 'pointer' }} href={`/users/${text}`}>
        {text}
      </a>
    ),
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    sorter: (a, b) => {
      console.log(a);
      return a.email.localeCompare(b.email);
    },
  },
  {
    title: 'Nickname',
    dataIndex: 'nickname',
    key: 'nickname',
    sorter: (a, b) => {
      return a.nickname.localeCompare(b.nickname);
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
    sorter: (a, b) => {
      return a.role.localeCompare(b.role);
    },
    render: (role) => {
      let color = role === 'USER' ? 'geekblue' : 'green';
      return (
        <Tag color={color} key={role}>
          {role}
        </Tag>
      );
    },
  },
];

export const UserInfo = () => {
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 :(</p>;

  let dataSource = data.users.map((user, i) => {
    return {
      key: user.id,
      id: i,
      email: user.email,
      nickname: user.nickname,
      levelOf3Dae: user.levelOf3Dae,
      createdAt: user.createdAt.slice(0, 10),
      role: user.role,
    };
  });

  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
    </>
  );
};

export default UserInfo;
