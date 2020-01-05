import React from 'react';

import 'antd/dist/antd.css';
import { Layout } from 'antd';
const { Content } = Layout;

function Setting() {
  return (
    <Content
      style={{
        background: '#fff',
        padding: 24,
        margin: 0,
      }}
    >
      세팅입니다
    </Content>
  );
}

export default Setting;
