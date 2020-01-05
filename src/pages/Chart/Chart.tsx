import React from 'react';

import 'antd/dist/antd.css';
import { Layout } from 'antd';
const { Content } = Layout;

function Chart() {
  return (
    <Content
      style={{
        background: '#fff',
        padding: 24,
        margin: 0,
      }}
    >
      차트입니다
    </Content>
  );
}

export default Chart;
