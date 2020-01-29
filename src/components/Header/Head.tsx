import React from 'react';
import Login from '../Login/Login';
import Menu from '../Menu/index';
import 'antd/dist/antd.css';
import { Input, Icon, Button, Form } from 'antd';

import { Layout } from 'antd';
const { Header } = Layout;

// header 에서 메시지 총합을 menu에 쏴줘야 할 듯

function Head() {
  return (
    <Header className="header">
      <Menu />
      <Form
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          color: 'white',
        }}
      >
        <Login />
      </Form>
    </Header>
  );
}

export default Head;
