import React from 'react';

import 'antd/dist/antd.css';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS, GET_USERINFO } from '../../graphql/queries';
import { Icon, Dropdown, Menu, Avatar, Card } from 'antd';

const Message = () => {
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 :(</p>;

  // layout만 잡고 있지만 message feed가 온 순서 대로 데이터를 뿌려줘야함
  const menu = data.users.map((user, i) => {
    if (i < 4) {
      return (
        <Menu.Item
          style={{
            color: 'black',
            width: '230px',
            height: '100px',
            border: '1px solid black',
          }}
        >
          <Avatar size="small" icon="user" />
          <span>{user.nickname}</span>
        </Menu.Item>
      );
    } else return;
  });

  return (
    <Menu>
      <Menu.Item disabled>
        <div>you have new messages</div>
      </Menu.Item>
      {menu}
    </Menu>
  );
};

export default Message;
