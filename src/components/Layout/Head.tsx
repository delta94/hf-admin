import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

function Head() {
  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
        <Menu.Item key="1">Dashboard</Menu.Item>
        <Menu.Item key="2">User</Menu.Item>
        <Menu.Item key="3">Setting</Menu.Item>
      </Menu>
    </Header>
  );
}

export default Head;
