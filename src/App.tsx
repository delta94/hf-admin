import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import { ApolloProvider } from '@apollo/react-hooks';
import { Layout } from 'antd';
import styled from 'styled-components';

import Header from './components/Header/Head';
import Sidebar from './components/SideBar/Sidebar';

import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/Users';
import Setting from './pages/Setting/Setting';
import Graph from './pages/Graph/Graph';
import Chart from './pages/Chart/Chart';

import client from './graphql/apollo';

const MainLayout = styled(Layout)`
  height: 100vh;
  overflow: scroll;
`;

const App = () => {
  return (
    <ApolloProvider client={client}>
      <MainLayout>
        <BrowserRouter>
          <Header />
          <Layout>
            <Sidebar />
            <Layout>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/users" component={Users} />
                <Route exact path="/setting" component={Setting} />
                <Route exact path="/graph" component={Graph} />
                <Route exact path="/chart" component={Chart} />
              </Switch>
            </Layout>
          </Layout>
        </BrowserRouter>
      </MainLayout>
    </ApolloProvider>
  );
};

export default App;
