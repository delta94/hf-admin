import React from 'react';
import 'antd/dist/antd.css';
import { Icon, Dropdown, Menu, Avatar } from 'antd';
import Message from './Message';
const message = <Message />;

const index = () => {
  return (
    <span style={{ marginRight: '100px', cursor: 'pointer' }}>
      {/* <span style={{ marginRight: '30px', cursor: 'pointer' }}>
        <Dropdown overlay={menu}>
          <Icon type="alert" />
        </Dropdown>
      </span>
      <span style={{ marginRight: '30px', cursor: 'pointer' }}>
        <Dropdown overlay={menu}>
          <Icon type="contacts" />
        </Dropdown>
      </span> */}
      <span style={{ marginRight: '30px', cursor: 'pointer' }}>
        <Dropdown overlay={message}>
          <Icon type="message" />
        </Dropdown>
      </span>
    </span>
  );
};

export default index;
