import React from 'react';
import 'antd/dist/antd.css';
import { Icon, Dropdown, Menu } from 'antd';
const menu = (
  <Menu>
    <Menu.Item style={{ color: 'black' }} disabled>
      <div>you have messages</div>
    </Menu.Item>
    <Menu.Item>
      <span>사진</span>
      <div>하이</div>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const Message = () => {
  return (
    <span style={{ marginRight: '80px', cursor: 'pointer' }}>
      <span style={{ marginRight: '30px', cursor: 'pointer' }}>
        <Dropdown overlay={menu}>
          <Icon type="alert" />
        </Dropdown>
      </span>
      <span style={{ marginRight: '30px', cursor: 'pointer' }}>
        <Dropdown overlay={menu}>
          <Icon type="contacts" />
        </Dropdown>
      </span>
      <span style={{ marginRight: '30px', cursor: 'pointer' }}>
        <Dropdown overlay={menu}>
          <Icon type="message" />
        </Dropdown>
      </span>
    </span>
  );
};

export default Message;
