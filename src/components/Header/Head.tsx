import React from 'react';
import Login from '../Login/Login';
import Menu from '../Menu/index';
import 'antd/dist/antd.css';
import { Input, Icon, Button, Form } from 'antd';

import { Layout } from 'antd';
const { Header } = Layout;

function Head() {
  return (
    <Header className="header">
      <Form
        style={{
          position: 'absolute',
          top: '15px',
          right: '20px',
          color: 'white',
        }}
      >
        <Menu />
        <Login />
      </Form>
    </Header>
  );
}

export default Head;
