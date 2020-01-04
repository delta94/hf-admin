import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

function Sidebar() {
  return (
    <Sider collapsible width={200} style={{ background: '#fff' }}>
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1">
          <Icon type="laptop" />
          <span>Dashboard</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="user" />
          <span>User</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="setting" />
          <span>Setting</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
