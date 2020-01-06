import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
const { Content } = Layout;
const User = () => {
  return (
    <Content
      style={{
        background: '#fff',
        padding: 24,
        margin: 0,
      }}
    >
      유저입니다
    </Content>
  );
};

export default User;
