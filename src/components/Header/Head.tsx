import React from 'react';
import Login from '../Login/Login';
import 'antd/dist/antd.css';
import { Input, Icon, Button, Form } from 'antd';

import { Layout } from 'antd';
const { Header } = Layout;

function Head() {
  return (
    <Header className="header">
      <Login />
    </Header>
  );
}

export default Head;
