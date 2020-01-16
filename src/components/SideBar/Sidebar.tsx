import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

function Sidebar() {
  return (
    <Sider collapsible width={200} style={{ background: '#fff' }}>
      <Menu
        mode="inline"
        theme="dark"
        // defaultSelectedKeys={['1']}
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
        <Menu.Item key="3">
          <Link to="/setting">
            <Icon type="setting" />
            <span>Setting</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/graph">
            <Icon type="area-chart" />
            <span>graph</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/chart">
            <Icon type="pie-chart" />
            <span>chart</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
