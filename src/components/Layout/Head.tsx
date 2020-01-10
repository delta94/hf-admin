import React from 'react';
import Login from '../Login';
import 'antd/dist/antd.css';

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
