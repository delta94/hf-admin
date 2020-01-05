import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
const { Content } = Layout;

function Dashboard() {
  return (
    <Content
      style={{
        background: '#fff',
        padding: 24,
        margin: 0,
      }}
    >
      대시보드입니다
    </Content>
  );
}

export default Dashboard;
