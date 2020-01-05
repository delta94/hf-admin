import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import styled from 'styled-components';

import Header from './components/Layout/Head';
import Sidebar from './components/Layout/Sidebar';

import Dashboard from './containers/Dashboard';
import User from './containers/User';
import Setting from './containers/Setting';

const MainLayout = styled(Layout)`
  height: 100vh;
`;

function App() {
  return (
    <MainLayout>
      <BrowserRouter>
        {/* <Header /> */}
        <Layout>
          <Sidebar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/user" component={User} />
              <Route exact path="/setting" component={Setting} />
            </Switch>
          </Layout>
        </Layout>
      </BrowserRouter>
    </MainLayout>
  );
}

export default App;
