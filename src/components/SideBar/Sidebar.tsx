import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';

const Sidebar = () => (
  <Layout.Sider collapsible width={200} style={{ background: '#fff' }}>
    <Menu
      mode="inline"
      theme="dark"
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
    >
      <Menu.Item key="1">
        <Link to="/">
          <Icon type="home" />
          <span>Dashboard</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/users">
          <Icon type="user" />
          <span>Users</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/messages">
          <Icon type="message" />
          <span>Message</span>
        </Link>
      </Menu.Item>
    </Menu>
  </Layout.Sider>
);

export default Sidebar;
