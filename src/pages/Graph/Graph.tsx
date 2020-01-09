import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_TOKEN } from '../../graphql/queries';

import 'antd/dist/antd.css';
import { Layout } from 'antd';
const { Content } = Layout;

const Graph = () => {
  const { data } = useQuery(GET_TOKEN, {
    variables: { email: 'admin@hf.club', password: 'abc123' },
  });

  if (data) {
    console.log(data);
  }

  return (
    <div>
      <Content>그래프큐엘 테스트 페이지</Content>
    </div>
  );
};

export default Graph;
