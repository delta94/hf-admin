import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import { ApolloProvider } from '@apollo/react-hooks';
import { Layout } from 'antd';
import styled from 'styled-components';

import Header from './components/Layout/Head';
import Sidebar from './components/Layout/Sidebar';

import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import User from './pages/User/User';
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
          {/* <Header /> */}
          <Layout>
            <Sidebar />
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/user" component={User} />
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
