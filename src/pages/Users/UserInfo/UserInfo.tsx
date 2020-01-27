import React, { useState } from 'react';

import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../../graphql/queries';
import 'antd/dist/antd.css';
import { Table, Tag, Button, Divider, Input, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import UserAdd from '../UserAdd/UserAdd';

import Room2 from '../../Graph/Room2';

// message 방을 집어 넣어야 함

export const UserInfo = () => {
  const [addUser, setAddUSer] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  const [message, setMessage] = useState(null);

  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 :(</p>;

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: (filtered) => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

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
        return a.email.localeCompare(b.email);
      },
    },
    {
      title: 'Nickname',
      dataIndex: 'nickname',
      key: 'nickname',
      ...getColumnSearchProps('nickname'),
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
    {
      title: 'Action',
      dataIndex: 'role',
      key: 'action',
      render: (text, record) => {
        return (
          <span>
            <a onClick={() => setMessage(record.id)}>Message</a>
            {/* <Divider type="vertical" />
            <a>Delete</a> */}
          </span>
        );
      },
    },
  ];

  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 8 }}
      />
      <Button onClick={() => setAddUSer(!addUser)}>Add User</Button>
      {addUser ? <UserAdd /> : null}
      {message ? <Room2 room={message} /> : null}
    </>
  );
};

export default UserInfo;
