import React from 'react';
import Login from '../Login';
import 'antd/dist/antd.css';
import { useQuery } from '@apollo/react-hooks';
import { GET_TOKEN } from '../../graphql/queries';

import { Layout } from 'antd';
const { Header } = Layout;

function Head() {
  const { loading, error, data } = useQuery(GET_TOKEN, {
    variables: { email: 'admin@hf.club', password: 'abc123' },
  });
  return (
    <Header className="header">
      <Login />
    </Header>
  );
}

export default Head;
