import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../graphql/queries';

import 'antd/dist/antd.css';
import { Layout } from 'antd';
const { Content } = Layout;

const Graph = () => {
  const { data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  return (
    <div>
      <Content>{data ? <div></div> : <div>로그인</div>}</Content>
    </div>
  );
};

export default Graph;
