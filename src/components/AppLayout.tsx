import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import styled from 'styled-components';

import Head from './Header/Head';
import Sidebar from './SideBar/Sidebar';

const { Content } = Layout;

const MainLayout = styled(Layout)`
  height: 100vh;
`;
function AppLayout() {
  return (
    <MainLayout>
      <Head />
      <Layout>
        <Sidebar />
        <Layout>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
            }}
          >
            대시보드입니다
          </Content>
        </Layout>
      </Layout>
    </MainLayout>
  );
}

export default AppLayout;
